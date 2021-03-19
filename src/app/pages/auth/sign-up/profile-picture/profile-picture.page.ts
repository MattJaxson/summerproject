import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType } from "@capacitor/core";
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
  uploadedPhoto = false;
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
        quality: 90,
        preserveAspectRatio: true,
        allowEditing: true,
        resultType: CameraResultType.DataUrl
      });
      // var imageUrl = image.dataUrl;
      // TODO
      // Crop the image in a 1:1 ratio
      // Save dataurl to another format
      // this.imageSrc = imageUrl;
      // this.uploadedPhoto = true;
      // this.imageCropperLoading(image)
  }
  async imageCropModal(image) {
    const modal = await this.modalController.create({
      component: ImageCropperPage,
      cssClass: 'my-custom-class',
      componentProps: {
        imageFromProfilePage: image
      }
    });
    return await modal.present();
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
    // await this.imageCropModal(image)
  }



}
