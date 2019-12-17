import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  //  Define type
  userInfo = {
    fullName: '',
    addressOne: '',
    addressTwo: '',
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
    private jwtHelper: JwtHelperService,
    private plt: Platform) {

      // Inside the constructor we always check for an existing token so we can automatically log in a user
      this.plt.ready().then(() => {
        this.checkToken();
      });
      console.log('Authentication State: ');
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

printMessage() {
  this.http.get('http://localhost:3000/api/').subscribe();
}

// When user hits Cancel, or when they complete the sign up.
clearUserInfo() {

}


  checkToken() {
    // looks up our storage for a valid JWT and if found, changes our authenticationState
  }

  // Observables are lazy, and the request is only made when we subscribe. (Cold Observable)

  //  Needs the Resonse Type to be text because I am sending the code, which isn't in JSON format
  sendEmailWithCode(code)  {
    return this.http.post('http://localhost:3000/api/login-credentials', { code }, { responseType: 'text'}).subscribe();
  }

  // Register User
  register() {
      this.http.post('http://localhost:3000/api/signup', this.userInfo).subscribe();
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }


  // Update User
  update() {
    console.log('Deleted User');
  }

  // Delete User
  delete() {
    console.log('Deleted User');
  }
}
