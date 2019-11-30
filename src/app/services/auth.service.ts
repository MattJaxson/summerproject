import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { environment } from '../../environments/environment';

// import {  } from '';
// import {  } from '';

const REGISTER_URL = environment.registerUrl;


@Injectable({
  providedIn: 'root'
})
export class AuthService
 {

  constructor(
    private httpClient: HttpClient) { }

  // Login / Find User
  login(name: string, email: string, password: string) {

  }

  // Register User
  register(name: string, email: string, password: string) {
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
}
