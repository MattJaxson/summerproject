import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.page.html',
  styleUrls: ['./profile-picture.page.scss'],
})
export class ProfilePicturePage implements OnInit {
  //  +++ Brainstorm +++
  //  Maybe I need to notify the server that this user didnt upload a profile picture?

  constructor(
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    console.log('Navigated to Profile Picture Page with Data');
  }

  goToUploadResumePage() {
    console.log('Going to Resume Page >>');
    this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  skip() {
    console.log('Skipping to Upload Resume >>');
    this.presentAlert();
    // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

  getPhotoFromCamera() {

  }

  getPhotoFromGallery() {

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
