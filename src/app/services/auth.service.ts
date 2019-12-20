import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  REGISTER_URL = environment.registerUrl;
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
    private toastController: ToastController) {

      // Inside the constructor we always check for an existing token so we can automatically log in a user
      this.plt.ready().then(() => {
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
getProfilePicture(data) {
  console.log('Sent Profile Picture to Auth Service');
  this.userInfo.profilePicture = data;
  console.log(this.userInfo);

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

// When user hits Cancel, or when they complete the sign up.
clearUserInfo() {

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

async getEmailFromToken() {
  this.storage.get(this.TOKEN_KEY).then(token => {
    if (token) {
      const decoded = this.helper.decodeToken(token);
      console.log('Token Email: ' + decoded.email);
    }
  });
}
  //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format
  sendEmailWithCode(code)  {
    return this.http.post('http://localhost:3000/api/login-credentials', { code }, { responseType: 'text'}).subscribe();
  }

  // Register User
  register() {
      this.http.post('http://localhost:3000/api/signup', this.userInfo).subscribe();
  }

  // Login User
  login(data) {
    console.log('Logging in');
    return this.http.post('http://localhost:3000/api/', {email: data.email, password: data.password})
      .pipe(
        tap(res => {
          this.storage.set(this.TOKEN_KEY, res.token);
          this.user = this.helper.decodeToken( res.token);
          this.authenticationState.next(true);
          this.activeEmail = this.user.email;
          console.log('Active User: ' + this.user.email);
        }),
        catchError(e => {
          throw new Error(e);
        })
      ).subscribe();
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
