import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { PhotoService } from '../../../../services/photo.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';


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

  constructor(
    private photo: PhotoService,
    private router: Router,
    private profile: ProfileService,
    private alert: AlertController,
    private toast: ToastController,
    private loading: LoadingController
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

  getFormData(event) {
   const formElement = document.querySelectorAll('form');
   formElement.forEach(form => {
    if ( form.id === 'changePhotoForm') {
      console.log('Got Form: ' + form);
      this.formData = new FormData(form);
      this.uploadedPhoto = true;
    }
   });

   console.log(this.formData);

   let reader = new FileReader();
   reader.addEventListener('load',  () => {
     // convert image file to base64 string
     this.uploadedPhotoURL = reader.result;
   }, false);

   if (formElement) {
     reader.readAsDataURL(event.target.files[0]);
   }
 }

 uploadChangedPhoto() {
  const formElement = document.querySelectorAll('form');
  formElement.forEach(form => {
   if ( form.id === 'changePhotoForm') {
     console.log('Got Form: ' + form);
     this.formData = new FormData(form);
     this.formData.append('oldPhotoKey', this.awsPrefix);
     this.formData.append('email', this.userEmail);
   }
  });


  this.photo.changeProfilePicture(this.formData).subscribe(
     async data => {
       console.log(data);
       let newPhoto = data['objectUrl'];
       await this.presentLoading();
       await this.profile.profilePicture.next(newPhoto);
       await this.presentToast();
       await this.router.navigate(['/home/profile']);
     }
   );
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

  back() {
    this.router.navigate(['/home/profile']);
  }

}
