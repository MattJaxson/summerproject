import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { Platform, AlertController } from '@ionic/angular';

import { User } from '../../../models/user.model';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

// import {  } from '';
// import {  } from '';

// const HttpUploadOptions = {
//   headers: new HttpHeaders({ "Content-Type": 'multipart/form-data' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  user = null;

  authenticationState = new BehaviorSubject(false);
  activeEmail = '';

  //  Define type
  userInfo = {
    fullName: '',
    addressOne: '',
    addressTwo: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    gender: '',
    dob: '',
    school: '',
    grade: '',
    profilePicture: '',
    resume: '',
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private helper: JwtHelperService,
    private plt: Platform,
    private router: Router,
    private toast: ToastController) {

      // Inside the constructor we always check for an existing token so we can automatically log in a user
      this.plt.ready().then(() => {
        this.checkToken();
        this.getEmailFromToken();
      });
      console.log('Authentication State');
      this.authenticationState.subscribe(console.log);
     }

// tslint:disable-next-line: use-lifecycle-interface
ngOnDestroy() {
}
// Get UserInfo -- testing purposes. Delete eventually.
getUserInfo() {
  console.log(this.userInfo);
}

//  Sign up Functions
getPersonalInfo(data) {
  console.log('Sent Personal Infoto Auth Service: ');
  this.userInfo.fullName = data.fullName;
  this.userInfo.addressOne = data.addressOne;
  this.userInfo.addressTwo = data.addressTwo;
  this.userInfo.phone = data.phone;
  this.userInfo.city = data.city;
  this.userInfo.state = data.state;
  this.userInfo.zip = data.zip;
  this.userInfo.gender = data.gender;
  this.userInfo.dob = data.dob;
  this.userInfo.school = data.school;
  this.userInfo.grade = data.grade;
}

// Push the User's photo to the UserInfo Object
modifyProfilePicture(pic) {
  console.log('From AUTH Service: ');
  console.log(pic);
  let formData = new FormData();
  formData.append('picture', pic );


  return this.http.post(`${this.BACKEND_URL}/api/photo`, formData );
}

getResume(data) {
  console.log('Sent Resume to Auth Service');
  this.userInfo.resume = data;
  console.log(this.userInfo);
}

getLoginCredentials(data) {
  console.log('Sent Login Credentials to Auth Service');
  this.userInfo.email = data.email;
  this.userInfo.password =  data.password;
  console.log(this.userInfo);

}

 // looks up our storage for a valid JWT and if found, changes our authenticationState
 async checkToken() {
  this.storage.get(this.TOKEN_KEY).then(token => {
    if (token) {
      const decoded = this.helper.decodeToken(token);
      const isExpired = this.helper.isTokenExpired(token);

      if (!isExpired) {
         this.user = decoded;
         console.log('Decoded Token: ' + JSON.stringify(decoded));
         this.authenticationState.next(true);
      } else {
        console.log('Token Removed from Storage');
        this.storage.remove(this.TOKEN_KEY);
      }
    }
  });
}

 checkIfUserExits(email) {
  return this.http.post(`${this.BACKEND_URL}/api/admin/students`, {email})
    .subscribe();
}

 getEmailFromToken() {
  this.storage.get(this.TOKEN_KEY).then(token => {
    if (token) {
      const decoded = this.helper.decodeToken(token);
      console.log('Token Email: ' + decoded.email);
      this.activeEmail = decoded.email;
    }
  });
}
  //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format
  sendEmailWithCode(code, email)  {
    console.log('almost there');
    return this.http.post(`${this.BACKEND_URL}/api/login-credentials`, { code, email }).subscribe();
  }

  sendEmailWithCodeForgotPassword(code, email)  {
    return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password-email-code`, { code, email } ).subscribe();
  }

  // Register User
  register() {
      this.http.post(`${this.BACKEND_URL}/api/signup`, this.userInfo).subscribe();
  }

  // Login User
  login(data) {
    console.log('Logging in');
    return this.http.post(`${this.BACKEND_URL}/api/`,
    { email: data.email,
      password: data.password
    })
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response. There might be a bad password');
          }
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken( res['token']);
          this.activeEmail = this.user.email;
          this.authenticationState.next(true);
          console.log('Active User: ' + this.user.email);
        }),
        catchError(e => {
          console.error(e);
          if (e.message.startsWith('Http failure response')) {
            this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
          } else if (e.error.msg === 'The email and password don\'t match.') {
            this.presentAlert('Incorrect Email/Password', "The email and password don't match.");
          } else {
            this.presentAlert('Email/Password Error', 'Please try again.')
          }
          throw new Error(e);
        })
      ).subscribe();
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'There was an error with your password or email. Please try again.',
      duration: 5000,
      cssClass: 'wrong-password-toast',
      keyboardClose: true,
      position: 'top',

    });
    toast.present();
  }

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header: header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

  forgotPassword(email, newPassword) {
    return this.http.post(`${this.BACKEND_URL}/api/login-credentials/forgot-password`, { email, newPassword}).subscribe();
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY).then((token) => {
      console.log('Logging out...');
      this.user = null;
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
