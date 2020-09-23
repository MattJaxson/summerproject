import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ToastController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { PhotoService } from '../../../../services/photo.service';
import { environment } from '../../../../../environments/environment';
import { ImageCropperPage } from 'src/app/modals/image-cropper/image-cropper.page';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.page.html',
  styleUrls: ['./profile-picture.page.scss'],
  providers: []
})
export class ProfilePicturePage implements OnInit, AfterViewInit {

  defaultProfilePicturePath = '../../../../../assets/icon/default-pro-picture.svg';
  uploadedPhotoURL;
  uploadedPhoto = false;
  formData: FormData;

  BACKEND_URL = environment.url;

  @ViewChild('defaultPicture', {static: false}) defaultPictureRef: ElementRef;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private modal: ModalController,
    private photo: PhotoService,
    private auth: AuthService,
    private toast: ToastController ) { }

  ngOnInit() {
      console.log(this.defaultPicDataURI());
    }

    ngAfterViewInit() {
      console.log(this.defaultPictureRef.nativeElement);
    }

   async getFormData(event) {
    let formElement = document.querySelectorAll('form');
    await formElement.forEach(form => {
      if ( form.id === 'proPicForm') {
        console.log('Got Form: ',  form);
        this.formData = new FormData(form);
        console.log('Form data: ', this.formData);
        this.uploadedPhoto = true;
      }
     });

    let reader = new FileReader();
    await reader.addEventListener('load',  async () => {
      this.uploadedPhotoURL = reader.result;
      console.log('Before cropping: ' + reader.result);
      await this.cropPhoto(this.uploadedPhotoURL);
    }, true);

    if (formElement) {
      console.log(event.target.files[0]);
      return reader.readAsDataURL(event.target.files[0]);
    }
  }

  uploadPhoto() {
    const formElement = document.querySelectorAll('form');
    formElement.forEach(form => {
      if ( form.id === 'proPicForm') {
        console.log('Got Form: ' + form);
        this.formData = new FormData(form);
      }
    });
    const formData = new FormData();
    const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');

    formData.append('profile-picture', photoFile);

    if (this.uploadedPhoto === true) {
    this.photo.imageUpload(formData).subscribe(
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

  async cropPhoto(uploadedPhotoURL) {
    const modal = await this.modal.create({
      component: ImageCropperPage,
      cssClass: 'image-cropper',
      componentProps: {
        uploadedPhotoURL
      }
    });

    await modal.present();

    modal.onDidDismiss().then(data => {
      this.uploadedPhotoURL = data.data;
      console.log('After cropping: ' +  this.uploadedPhotoURL);
    });


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
            // // Get Default Picture Logo
            //     this.photo.imageUpload().subscribe(
            //       data => {
            //         console.log(data);
            //         console.log('Default Image Upload API Successful');
            //         console.log(data['objectUrl']);
            //         return this.goToUploadResumePage(data['objectUrl']);
            //       }
            //     );
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

  defaultPicDataURI() {
    // tslint:disable-next-line: max-line-length
    return 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Ni4zICg4MTcxNikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZGVmYXVsdC1wcm8tcGljdHVyZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM3OUE5Q0UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzU1NzM4QiIgc3RvcC1vcGFjaXR5PSIwLjUzMTYzMjQzIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxwYXRoIGQ9Ik0yOCwyNi44NjQ3NTQxIEMyNS40Mzc1LDI2Ljg2NDc1NDEgMjQuMjA1MzU3MSwyOC4yNzg2ODg1IDIwLDI4LjI3ODY4ODUgQzE1Ljc5NDY0MjksMjguMjc4Njg4NSAxNC41NzE0Mjg2LDI2Ljg2NDc1NDEgMTIsMjYuODY0NzU0MSBDNS4zNzUsMjYuODY0NzU0MSAwLDMyLjE4NDY4MjQgMCwzOC43NDE4MDMzIEwwLDQxLjAwNDA5ODQgQzAsNDMuMzQ1OTI3MyAxLjkxOTY0Mjg2LDQ1LjI0NTkwMTYgNC4yODU3MTQyOSw0NS4yNDU5MDE2IEwzNS43MTQyODU3LDQ1LjI0NTkwMTYgQzM4LjA4MDM1NzEsNDUuMjQ1OTAxNiA0MCw0My4zNDU5MjczIDQwLDQxLjAwNDA5ODQgTDQwLDM4Ljc0MTgwMzMgQzQwLDMyLjE4NDY4MjQgMzQuNjI1LDI2Ljg2NDc1NDEgMjgsMjYuODY0NzU0MSBaIE0zNS43MTQyODU3LDQxLjAwNDA5ODQgTDQuMjg1NzE0MjksNDEuMDA0MDk4NCBMNC4yODU3MTQyOSwzOC43NDE4MDMzIEM0LjI4NTcxNDI5LDM0LjUzNTM0ODQgNy43NSwzMS4xMDY1NTc0IDEyLDMxLjEwNjU1NzQgQzEzLjMwMzU3MTQsMzEuMTA2NTU3NCAxNS40MTk2NDI5LDMyLjUyMDQ5MTggMjAsMzIuNTIwNDkxOCBDMjQuNjE2MDcxNCwzMi41MjA0OTE4IDI2LjY4NzUsMzEuMTA2NTU3NCAyOCwzMS4xMDY1NTc0IEMzMi4yNSwzMS4xMDY1NTc0IDM1LjcxNDI4NTcsMzQuNTM1MzQ4NCAzNS43MTQyODU3LDM4Ljc0MTgwMzMgTDM1LjcxNDI4NTcsNDEuMDA0MDk4NCBaIE0yMCwyNS40NTA4MTk3IEMyNy4wOTgyMTQzLDI1LjQ1MDgxOTcgMzIuODU3MTQyOSwxOS43NTA4OTY1IDMyLjg1NzE0MjksMTIuNzI1NDA5OCBDMzIuODU3MTQyOSw1LjY5OTkyMzE2IDI3LjA5ODIxNDMsMCAyMCwwIEMxMi45MDE3ODU3LDAgNy4xNDI4NTcxNCw1LjY5OTkyMzE2IDcuMTQyODU3MTQsMTIuNzI1NDA5OCBDNy4xNDI4NTcxNCwxOS43NTA4OTY1IDEyLjkwMTc4NTcsMjUuNDUwODE5NyAyMCwyNS40NTA4MTk3IFogTTIwLDQuMjQxODAzMjggQzI0LjcyMzIxNDMsNC4yNDE4MDMyOCAyOC41NzE0Mjg2LDguMDUwNTg5MTQgMjguNTcxNDI4NiwxMi43MjU0MDk4IEMyOC41NzE0Mjg2LDE3LjQwMDIzMDUgMjQuNzIzMjE0MywyMS4yMDkwMTY0IDIwLDIxLjIwOTAxNjQgQzE1LjI3Njc4NTcsMjEuMjA5MDE2NCAxMS40Mjg1NzE0LDE3LjQwMDIzMDUgMTEuNDI4NTcxNCwxMi43MjU0MDk4IEMxMS40Mjg1NzE0LDguMDUwNTg5MTQgMTUuMjc2Nzg1Nyw0LjI0MTgwMzI4IDIwLDQuMjQxODAzMjggWiIgaWQ9InBhdGgtMiI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTE3LjUlIiB5PSItMTEuMSUiIHdpZHRoPSIxMzUuMCUiIGhlaWdodD0iMTMwLjklIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMyI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iZGVmYXVsdC1wcm8tcGljdHVyZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0idXNlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAuMDAwMDAwLCAyNy4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIxIiBmaWx0ZXI9InVybCgjZmlsdGVyLTMpIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGQjM1MSIgeGxpbms6aHJlZj0iI3BhdGgtMiI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
  }

  dataURLtoBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while(n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }

}
