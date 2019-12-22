import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';



@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.page.html',
  styleUrls: ['./profile-picture.page.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ProfilePicturePage implements OnInit {
  //  +++ Brainstorm +++
  //  Maybe I need to notify the server that this user didnt upload a profile picture?

  // Image of camera that is compatible with HTML
  profilePicture = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private auth: AuthService,
    private camera: Camera,
    private location: Location,
    private file: File) { }

  ngOnInit() {

  }

  goToUploadResumePage() {
    console.log('Going to Resume Page >>');
    this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Skip',
      message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
      buttons: [
        {
          text: 'Skip',
          handler: () => {
            this.router.navigate(['/personal-info/profile-picture/upload-resume']);
            console.log('Skipping Profile Picture...');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelling Profile Picture Upload Skip...');
          }
        }
      ]
    });

    await alert.present();
  }

  skip() {
    console.log('Skipping to Upload Resume >>');
    this.presentAlert();
    // this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  cancel() {
    console.log('Sign up cancelled');
    this.auth.clearUserInfo();
    // this.router.navigate(['']);
    this.location.back();
  }

  async getPhotoFromCamera() {
    // Options for Cordova Camera plugin
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
    };

    //  Get Picture from Camera
    this.camera.getPicture(options).then((imageData) => {
       //  Add this profile picture to UserInfo in AuthService
       this.profilePicture = (window as any).Ionic.WebView.convertFileSrc(imageData);

      //  split the file and the path from the FILE_URL resu;t
       const filename = this.
       profilePicture.substring(imageData.lastIndexOf('/') + 1);
       this.auth.getProfilePicture({profilePicture: imageData});
       console.log('filename: ' + filename);

       const path =  this.
       profilePicture.substring(0, this.
        profilePicture.lastIndexOf('/') + 1);
       console.log('filename: ' + path);

       // then use the method reasDataURL  btw. var_picture is ur image variable
       this.file.readAsDataURL(path, filename).then(res => console.log(res) );
     }, (err) => {
      alert('error ' + JSON.stringify(err));
     });
  }

  getPhotoFromGallery(selection) {

}


}
