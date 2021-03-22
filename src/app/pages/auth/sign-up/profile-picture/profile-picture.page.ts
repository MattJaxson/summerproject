import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
const { Camera } = Plugins;
import { AlertController, ToastController, ModalController, LoadingController } from '@ionic/angular';
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
export class ProfilePicturePage implements OnInit {
  imageSrc: string;
  uploadedPhotoURL;
  uploadedPhoto = false;
  formData: FormData;
  BACKEND_URL = environment.url;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private photo: PhotoService,
    private auth: AuthService,
    private toast: ToastController ) { }

  ngOnInit() {
  }
  async takePicture() {
      const image = await Camera.getPhoto({
        quality: 100,
        height: 50,
        webUseInput: true,
        source: CameraSource.Photos,
        preserveAspectRatio: true,
        allowEditing: true,
        resultType: CameraResultType.DataUrl
      });

      // function blobToFile(theBlob, fileName){
      //   //A Blob() is almost a File() - it's just missing the two properties below which we will add
      //   theBlob.lastModifiedDate = new Date();
      //   theBlob.name = fileName;
      //   return theBlob;
      // }
      // function dataURLtoBlob(dataurl) {
      // var arr = dataurl.dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      //     bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      // while(n--){
      //     u8arr[n] = bstr.charCodeAt(n);
      // }
      // return new Blob([u8arr], {type: mime});
      // }
      // let formattedImage = dataURLtoBlob(image)
      // let newFile = blobToFile(formattedImage, 'new-file')

    this.imageCropperLoading(image)
  }
  async imageCropModal(image) {
    const modal = await this.modalController.create({
      component: ImageCropperPage,
      cssClass: 'my-custom-class',
      componentProps: {
        imageFromProfilePage: image
      }
    });
    await modal.present();
    await modal.onDidDismiss().then(
      (data) => {
        console.log(data)
        this.imageSrc = data.data;
        if(data.data === undefined) {
          this.uploadedPhoto = false;
        } else {
          this.uploadedPhoto = true;
        }
      }
    );
  }
  async skipAlert() {
      const alert = await this.alertController.create({
        cssClass: 'skip-alert',
        header: 'Skip Logo Upload',
        message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.router.navigate(['/sign-up/carrier/driver-info']);
              this.auth.user.profilePicture = '<default picture>'
            }
          }
        ]
      });
      await alert.present();
  }
  async imageCropperLoading(image) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading Image Cropper',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    await this.imageCropModal(image)
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
    const photoFile = new File([this.dataURLtoBlob(this.imageSrc)], 'picture.png');

    formData.append('profile-picture', photoFile);

    if (this.uploadedPhoto === true) {
    this.photo.imageUpload(formData).subscribe(
      data => {
        console.log(data);
        console.log('Image Upload API Successful');
        this.goToUploadResumePage(data['objectUrl']);
      })
    }
}
goToUploadResumePage(photoURL) {
  this.auth.getProfilePicture(photoURL);
  console.log('Going to Resume Page >>');
  this.router.navigate(['/personal-info/profile-picture/upload-resume']);
}
  cancel() {
    console.log('Sign up cancelled');
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
    })
  }
  dataURLtoBlob(dataurl) {
    // console.log(dataurl)
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }
}
