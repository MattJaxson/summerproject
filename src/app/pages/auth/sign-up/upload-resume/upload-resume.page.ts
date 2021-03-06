import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ResumeService } from '../../../../services/resume.service';


@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.page.html',
  styleUrls: ['./upload-resume.page.scss'],
})
export class UploadResumePage implements OnInit {
  uploaded = true;
  formDataForS3: FormData;
  formData: FormData;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private auth: AuthService,
    private resume: ResumeService) { }

  ngOnInit() {

  }

  getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if ( form.id === 'resume-form') {
        console.log('Got Form: ' + form);
        this.formData = new FormData(form);
      }
     });
  }

  uploadResume() {
    this.resume.resumeUpload(this.formData).subscribe(
      data => {
        console.log(data['objectUrl']);
        this.goToCredentialsPage(data['objectUrl']);
      }
    );
  }

  goToCredentialsPage(resume) {
    this.auth.getResume(resume);
    console.log('Going to Credentials Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials']);
  }

  getFileFromPhone() {
    console.error("TODO: getFileFromPhone() not implemented yet");
  }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
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
