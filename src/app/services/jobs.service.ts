import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class JobsService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getJobs() {
    console.log('Getting Jobs');
    return this.http.get(`${this.BACKEND_URL}/api/admin/jobs`);
  }
}

