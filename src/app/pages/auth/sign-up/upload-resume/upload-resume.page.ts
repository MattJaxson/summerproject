import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ResumeService } from '../../../../services/resume.service';


@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.page.html',
  styleUrls: ['./upload-resume.page.scss'],
})
export class UploadResumePage implements OnInit {
  formDataForS3: FormData;
  formData: FormData;

  constructor(
    private router: Router,
    private alertController: AlertController,
    public auth: AuthService,
    private resume: ResumeService,
    private toastController: ToastController) { }

  ngOnInit() {

  }

  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if ( form.id === 'resume-form') {
        console.log('Got Form: ');
        this.formData = new FormData(form);
        console.log(event);
      }
     });
  }

  uploadResume() {
    if(this.formData == undefined) {
      return this.noResumeToast();
    } else {
      this.resume.resumeUpload(this.formData);
    }
  }
  async noResumeToast() {
    const toast = await this.toastController.create({
      message: 'Please upload a Resume, or Skip',
      cssClass: 'danger-toast',
      duration: 2000
    });
    toast.present();
    }

  getFileFromPhone() {
    console.error("TODO: getFileFromPhone() not implemented yet");
  }

  back() {
    console.log('Sign up cancelled');
    this.router.navigate(['/personal-info/profile-picture']);
  }

  skip() {
    console.log('Skipping to Upload Resume >>');
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Skip',
      message: 'Are you sure you want to skip? You can always upload a Resume in the future by going to your Profile.',
      buttons: [
        {
          text: 'Skip',
          handler: () => {
            // Get Default Picture Logo

            this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);

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
