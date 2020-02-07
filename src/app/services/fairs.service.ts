import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FairsService {
  allFairs = [];
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getFairs() {
    console.log('Getting Fairs');
    return this.http.get(`${this.BACKEND_URL}/api/fairs`);
  }



}

