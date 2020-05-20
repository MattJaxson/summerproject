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
  uploaded = true;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private auth: AuthService,
    private location: Location) { }

  ngOnInit() {

  }

  goToCredentialsPage(resume) {
    this.auth.getResume(resume);
    console.log('Going to Credentials Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
  }

  getFileFromPhone() {
    console.error("TODO: getFileFromPhone() not implemented yet");
  }

  uploadResume() {
    console.error("TODO: uploadResume() not implemented yet");
  }

  cancel() {
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
      message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
      buttons: [
        {
          text: 'Skip',
          handler: () => {
            this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
            console.log('Skipping Resume Upload...');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelling Resume Upload Skip...');
          }
        }
      ]
    });

    await alert.present();
  }


}
