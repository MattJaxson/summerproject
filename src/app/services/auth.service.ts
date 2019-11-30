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

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private jwtHelper: JwtHelperService,
    private plt: Platform) {

      // Inside the constructor we always check for an existing token so we can automatically log in a user
      this.plt.ready().then(() => {
        this.checkToken();
      });
     }

  // looks up our storage for a valid JWT and if found, changes our authenticationState
  checkToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.jwtHelper.decodeToken(token);
        let isExpired = this.jwtHelper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(this.TOKEN_KEY);
        }
      }
    });
  }

  // // Login / Find User
  // login(email: string, password: string) {
  //   console.log('From Service: Find User');
  //   return this.httpClient.get<User>('http://localhost:3000/api/users/current', { email, password });
  // }


  // Register User
  register(name: string, email: string, password: string) {
    this.showAlert('Registered User');
    console.log('From Service: Registered User');
    return this.httpClient.post<User>('http://localhost:3000/api/signup', { name, email, password });
  }

  login(credentials) {
    this.showAlert('User Logged in');
    return this.httpClient
      .get<User>('http://localhost:3000/api/', credentials)
      .pipe(
        tap(res => {
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.jwtHelper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getSpecialData() {
    return this.httpClient.get('http://localhost:3000//api/special').pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }


  // Update User
  update() {
    console.log('Deleted User');
  }

  // Delete User
  delete() {
    console.log('Deleted User');
  }

  showAlert(msg) {
    const alert = this.alertController.create({
      message: msg,
      header: 'Registered',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
