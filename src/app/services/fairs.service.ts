import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
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

  getFair(id) {
    console.log(id);
    console.log('id from fairs service');
    return this.http.post(`${this.BACKEND_URL}/api/fairs/fair`, {id});
  }

  registerStudent(student) {
  return this.http.post(`${this.BACKEND_URL}/api/fairs/register-student`, student).subscribe(
   async data => {
      await console.log('registering student to fair');
      await console.log(data);
      await this.presentLoadingWithOptions(student.name, student.email);
      await this.router.navigate(['']);
      await console.log('REGISTERED STUDENT TO FAIR!');
    }
  );
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



  async presentLoadingWithOptions(chaperoneName, chaperoneEmail) {
    const loading = await this.loading.create({
      duration: 3000,
      message: `Registering you as a Chaperone ${chaperoneName}. Sending an email to ${chaperoneEmail}`,
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);

}


async presentAlert() {
  const alert = await this.alert.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'You have been Registered.',
  });

  await alert.present();
}

}
