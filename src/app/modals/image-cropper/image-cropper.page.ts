import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import Cropper from 'cropperjs';
import { ModalController, NavParams, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.page.html',
  styleUrls: ['./image-cropper.page.scss'],
})
export class ImageCropperPage implements OnInit, AfterViewInit {

  @ViewChild('image', { static: false }) imageElement: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('src')

  public imageDestination: string;
  private cropper: Cropper;
  uploadedPhotoURL;

  constructor(
    private modal: ModalController,
    public navParams: NavParams,
    private loading: LoadingController,
    private toast: ToastController) {
    this.imageDestination = '';
}

public ngAfterViewInit() {
  console.log('AfterViewInit');
  this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      viewMode: 1,
      responsive: true,
      movable: true,
      zoomOnTouch: true,
      zoomOnWheel: true,
      crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.imageDestination = canvas.toDataURL('image/png');
      },
      cropend: () => {
        console.log('The crop ended');
      }
  });
}

public ngOnInit() {
  console.log('OnInit');

  this.uploadedPhotoURL = this.navParams.get('uploadedPhotoURL');
}

  back() {
    console.log('back');
    this.modal.dismiss();
  }

  crop(imageDestination) {
    console.log('cropping');

    // let blob = this.dataURLtoBlob(uploadedPhotoURL);

    this.modal.dismiss(
      imageDestination
    );

  }

  dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }
}
