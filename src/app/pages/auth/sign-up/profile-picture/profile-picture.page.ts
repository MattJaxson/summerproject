import { Component, OnInit, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlertController, ActionSheetController, ToastController, Platform, LoadingController, IonInput } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { AuthService } from '../../../../services/auth.service';
import { PhotoService } from '../../../../services/photo.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.page.html',
  styleUrls: ['./profile-picture.page.scss'],
  providers: []
})
export class ProfilePicturePage implements OnInit {

  defaultProfilePicturePath = '../../../../../assets/icon/default-pro-picture.svg';
  uploadedPhotoURL;
  uploadedPhoto = false;
  formData: FormData;

  BACKEND_URL = environment.url;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private photo: PhotoService,
    private auth: AuthService,
    private toast: ToastController ) { }

  ngOnInit() {
    const defualtPhoto = document.querySelectorAll('img');
    defualtPhoto.forEach(div => {
      if ( div.id === 'default-picture-wrapper') {
        console.log(div);
      }
    });
    }

   getFormData(event) {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if ( form.id === 'proPicForm') {
        console.log('Got Form: ',  form);
        this.formData = new FormData(form);
        console.log('Form data: ', this.formData);
        this.uploadedPhoto = true;
      }
     });

    let reader = new FileReader();
    reader.addEventListener('load',  () => {
      // convert image file to base64 string
      this.uploadedPhotoURL = reader.result;
    }, false);

    if (formElement) {
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  uploadPhoto() {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if ( form.id === 'profile-picture-form') {
        console.log('Got Form: ' + form);
        this.formData = new FormData(form);
      }
    });

    if (this.uploadedPhoto === true) {
    this.photo.imageUpload(this.formData).subscribe(
      data => {
        console.log(data);
        console.log('Image Upload API Successful');
        this.goToUploadResumePage(data['objectUrl']);
      }
    );

  }

  }

  skip() {
    console.log('Skipping to Upload Resume >>');
    this.presentSkipAlert();
  }



  goToUploadResumePage(photoURL) {
    this.auth.getProfilePicture(photoURL);
    console.log('Going to Resume Page >>');
    this.router.navigate(['/personal-info/profile-picture/upload-resume']);
  }

  async presentSkipAlert() {
    const alert = await this.alertController.create({
      header: 'Skip',
      message: 'Are you sure you want to skip? You can always upload a picture in the future by going to your Profile.',
      buttons: [
        {
          text: 'Skip',
          handler: () => {
            // Get Default Picture Logo

            const canvasElement = document.querySelectorAll('canvas');
            canvasElement.forEach( canvas => {
            if ( canvas.id === 'default-picture-wrapper') {
              console.log('Got Canvas: ' + canvas.toDataURL);
              canvas.toBlob( async blob => {
                const canvasData = new FormData();
                await canvasData.set('profile-picture', blob, 'default.png');
                console.log(canvasData);

                let reader = new FileReader();
                if (canvasData) {
                  reader.readAsBinaryString(blob);
                }


                await this.photo.imageUpload(canvasData).subscribe(
                  data => {
                    console.log(data);
                    console.log('Default Image Upload API Successful');
                    console.log(data['objectUrl']);
                    return this.goToUploadResumePage(data['objectUrl']);
                  }
                );
              });

            }
            });


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

  async presentToast(text) {
    const toast = await this.toast.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

  async presentCancelAlert() {
    const alert = await this.alertController.create({
      header: 'Cancel Sign up?',
      cssClass: 'danger-alert',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['']);
            console.log('Cancelling Sign Up...');
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  cancel() {
    console.log('Sign up cancelled');
    this.presentCancelAlert();
  }










}
