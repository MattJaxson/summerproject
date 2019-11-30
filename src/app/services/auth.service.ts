import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { User } from '../../../models/user.model';
import { environment } from '../../environments/environment';

// import {  } from '';
// import {  } from '';

const REGISTER_URL = environment.registerUrl;
const TOKEN_KEY = 'access_token';


@Injectable({
  providedIn: 'root'
})
export class AuthService
 {

  constructor(
    private httpClient: HttpClient,
    private storage: Storage,
    private alertController: AlertController) { }

  // // Login / Find User
  // login(email: string, password: string) {
  //   console.log('From Service: Find User');
  //   return this.httpClient.get<User>('http://localhost:3000/api/users/current', { email, password });
  // }

  // Register User
  register(name: string, email: string, password: string) {
    this.showAlert('Registered User');
    console.log('From Service: Registered User');
    return this.httpClient.post<User>('http://localhost:3000/api/users', { name, email, password });
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
