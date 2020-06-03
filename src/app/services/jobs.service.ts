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

  sendEmailApplication(user, age, phoneNumber, reason, jobTitle, jobCompanyEmail) {
    console.log(`Sending email to ${jobCompanyEmail}`);
    return this.http.post(`${this.BACKEND_URL}/api/jobs/send-application`, {user, age, phoneNumber, reason, jobTitle, jobCompanyEmail});
  }
}

