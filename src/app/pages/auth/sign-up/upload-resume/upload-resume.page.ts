import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.page.html',
  styleUrls: ['./upload-resume.page.scss'],
})
export class UploadResumePage implements OnInit {
  resume = '<resume>';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private auth: AuthService,
    private location: Location) { }

  ngOnInit() {

  }

  goToCredentialsPage(data) {
    this.auth.getResume(data);
    console.log('Going to Credentials Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
  }

  getFileFromPhone() {

  }

  uploadResume() {

  }

  cancel() {
    this.auth.clearUserInfo();
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

  skip() {
    console.log('Skipping to Upload Resume >>');
    this.presentAlert();
    // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Skip',
      message: 'If you skip, you can always upload a picture in the future by going to your Profile.',
      buttons: ['OK', 'CANCEL']
    });

    await alert.present();
  }


}
