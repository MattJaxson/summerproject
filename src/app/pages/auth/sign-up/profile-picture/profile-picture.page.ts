import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlertController, ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { finalize } from 'rxjs/operators';
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
  //  +++ Brainstorm +++
  //  Maybe I need to notify the server that this user didnt upload a profile picture?

  // Image of camera that is compatible with HTML
  profilePicture = '';
  BACKEND_URL = environment.url;


  constructor(
    private router: Router,
    private alertController: AlertController,
    private photo: PhotoService,
    private auth: AuthService,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private actionSheet: ActionSheetController,
    private loading: LoadingController,
    private platform: Platform,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private storage: Storage,
    private webView: WebView,
    private toast: ToastController ) { }

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

  async presentToast(text) {
    const toast = await this.toast.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
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

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webView.convertFileSrc(img);
      return converted;
    }
  }

async selectImage() {
    const actionSheet = await this.actionSheet.create({
        header: 'Select Image source',
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}

async takePicture(sourceType: PictureSourceType) {
  // Options for Cordova Camera plugin
  const options: CameraOptions = {
    quality: 100,
    sourceType,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };

  // Get IMAGE PATH from Camera
  const imagePath: string = await this.camera.getPicture(options);

  // tslint:disable-next-line: max-line-length
  // Given the IMAGE PATH from the Camera, find the path, get the file from the FileEntry, and use the FileReader on the file object to get raw data from the file.
  const imageFile = await this.photo.getSingleFile(imagePath);

  // to show profile picture on the webview in a format it can understand.
  this.profilePicture = (window as any).Ionic.WebView.convertFileSrc(imagePath);
  console.log(this.profilePicture);

  // Create a FormData constructor that uses the format 'multipart/form-data'
  const formData = new FormData();
  formData.append('photos', imageFile, imageFile.name);
  console.log('Form Data: ');
  formData.getAll(imageFile.name);

  const result = await this.uploadImages(formData);

  console.log('Image Path: ' + imagePath);
  console.log('Image File: ' + JSON.stringify(imageFile));
  console.log('result: ' + result);
  // await this.camera.cleanup();

  return result;

  }


  uploadImages(formData: FormData) {
    console.log('Attempting to upload image');
    console.log(formData);
    return this.http.post<any[]>(`${this.BACKEND_URL}/api/photo`, formData).subscribe();
  }
}
