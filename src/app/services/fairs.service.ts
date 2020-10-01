import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class FairsService {
  allFairs = [];
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    private loading: LoadingController,
    private alert: AlertController
  ) {}

  getFairs() {
    console.log('Getting Fairs');
    return this.http.get(`${this.BACKEND_URL}/api/fairs`);
  }

  getFair(name) {
    console.log(name);
    console.log('id from fairs service');
    return this.http.post(`${this.BACKEND_URL}/api/fairs/fair`, {name});
  }

  registerStudent(student) {
  return this.http.post(`${this.BACKEND_URL}/api/fairs/register-student`, student);
  }


  registerPartner(partner) {
    return this.http.post(`${this.BACKEND_URL}/api/fairs/register-partner`, partner).subscribe(
      async data => {
        await console.log('registering partner to fair...');
        await console.log(data);
        await this.presentLoadingWithOptions(partner.name, partner.email);
        await this.router.navigate(['']);
        await console.log('REGISTERED PARTNER TO FAIR!');
      }
    );
  }


  async registerChaperone(chaperone) {
    return this.http.post(`${this.BACKEND_URL}/api/fairs/register-chaperone`, chaperone).subscribe(
      async data => {
        await console.log('registering chaperone to fair');
        await console.log(data);
        await this.presentLoadingWithOptions(chaperone.name, chaperone.email);
        await this.router.navigate(['']);
        await console.log('REGISTERED CHAPERONE TO FAIR!');
      }
    );
  }


  async registerVolunteer(volunteer) {
    return this.http.post(`${this.BACKEND_URL}/api/fairs/register-volunteer`, volunteer).subscribe(
      async data => {
        await console.log('registering volunteer to fair');
        await console.log(data);
        await this.presentLoadingWithOptions(volunteer.name, volunteer.email);
        await this.router.navigate(['']);
        await console.log('REGISTERED VOLUNTEER TO FAIR!');
      }
    );
  }


  // Errors

  async handleError(error: HttpErrorResponse) {

    if ( error.error === 'A Student already has that email address' ) {
      console.log('A Student already has that email address');

      return this.emailAlreadyExistAlert();
    }

    return throwError(error);
   }

  async emailAlreadyExistAlert() {
    const alert = await this.alert.create({
      header: 'Email already in use.',
      message: 'This email already exists. Please enter another email address',
      buttons: ['Ok']
    });

    return await alert.present();
  }


  // Loading
  async presentLoadingWithOptions(chaperoneName, chaperoneEmail) {
    const loading = await this.loading.create({
      duration: 3000,
      message: `Registering you as a Chaperone ${chaperoneName}. Sending an email to ${chaperoneEmail}`,
      translucent: true,
      cssClass: 'loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);

}

// Alerts
async presentAlert() {
  const alert = await this.alert.create({
    header: 'Alert',
    cssClass: 'registered',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();
}


}
