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

  getFair(id) {
    console.log(id);
    console.log('id from fairs service');
    return this.http.post(`${this.BACKEND_URL}/api/fairs/fair`, {id});
  }

  registerStudent(student) {
  return this.http.post(`${this.BACKEND_URL}/api/fairs/register-student`, student).subscribe(
    data => {
      console.log('registering student to fair');
      console.log(data);
    }
  );
  }


  registerPartner(partner) {
    return this.http.post(`${this.BACKEND_URL}/api/fairs/register-partner`, partner).subscribe(
      data => {
        console.log('registering partner to fair');
        console.log(data);
      }
    );
  }


  registerChaperone(chaperone) {
    return this.http.post(`${this.BACKEND_URL}/api/fairs/register-partner`, chaperone).subscribe(
      data => {
        console.log('registering chaperone to fair');
        console.log(data);
      }
    );
  }

  registerVolunteer() {
    
  }



}

