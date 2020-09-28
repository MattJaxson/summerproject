import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { PhotoService } from '../../../../services/photo.service';
import { AlertController, ToastController, LoadingController, ModalController } from '@ionic/angular';
import { environment } from '../../../../../environments/environment';
import { ImageCropperPage } from 'src/app/modals/image-cropper/image-cropper.page';
import { PostPageEmitterService } from 'src/app/emitters/post-page-emitter.service';



@Component({
  selector: 'app-change-profile-picture',
  templateUrl: './change-profile-picture.page.html',
  styleUrls: ['./change-profile-picture.page.scss'],
})
export class ChangeProfilePicturePage implements OnInit {
  formData: FormData;
  imageUrl = this.profile.profilePicture.getValue();
  uploadedPhotoURL;
  uploadedPhoto = false;
  awsPrefix = this.imageUrl.slice(-51);
  userEmail: any;
  BACKEND_URL = environment.url;

  constructor(
    private photo: PhotoService,
    private router: Router,
    private profile: ProfileService,
    private alert: AlertController,
    private modal: ModalController,
    private toast: ToastController,
    private loading: LoadingController,
    private postEmitter: PostPageEmitterService
    ) { }

  ngOnInit() {
    this.profile.getUserDetails()
      .subscribe(
        data => {
          this.userEmail = data['email'];
          console.log(this.userEmail);
        }
      );
  }

  async getFormData(event) {
   const formElement = document.querySelectorAll('form');
   await formElement.forEach(form => {
    if ( form.id === 'changePhotoForm') {
      console.log('Got Form: ' + form);
      this.formData = new FormData(form);
      this.uploadedPhoto = true;
    }
   });

   console.log(this.formData);

   let reader = new FileReader();
   await reader.addEventListener('load', async () => {
     // convert image file to base64 string
     this.uploadedPhotoURL = reader.result;
     console.log('Before cropping: ' + reader.result);
     await this.cropPhoto(this.uploadedPhotoURL);
   }, true);

   if (formElement) {
     return reader.readAsDataURL(event.target.files[0]);
   }
 }

 uploadChangedPhoto() {

  const formData = new FormData();
  formData.append('oldPhotoKey', this.awsPrefix);
  formData.append('email', this.userEmail);

  const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'picture.png');

  formData.append('profile-picture-update', photoFile);

  if (this.uploadedPhoto === true) {
    this.photo.changeProfilePicture(formData).subscribe(
      data => {
        console.log(data);
        let newPhoto = data['objectUrl'];
        // Update all the creatorProfilePicture properties with newPhoto
        // this.photo.updatePostPhotos(newPhoto, this.userEmail);
        this.presentLoading();
        this.profile.profilePicture.next(newPhoto);
        this.presentToast();
        // Get profile pages to refresh with updated profile pics
        this.postEmitter.postPageRefresh();
        this.router.navigate(['/home/profile']);
      }
    );
  }
 }

async presentToast() {
  const toast = await this.toast.create({
    message: 'Your Profile Picture has been changed',
    animated: true,
    cssClass: 'updated-toast',
    duration: 2000
  });
  toast.present();
}

async presentLoading() {
  const loading = await this.loading.create({
    cssClass: 'my-custom-class',
    message: 'Updating Photo...',
    duration: 1000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
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
  });


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

  back() {
    this.router.navigate(['/home/profile']);
  }

}
