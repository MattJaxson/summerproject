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
  @Input('imageFromProfilePage') imageFromProfilePage;

  public imageDestination: string;
  private cropper: Cropper;
  uploadedPhotoURL;

  constructor(
    private modal: ModalController,
    public navParams: NavParams,
    private loading: LoadingController,
    private toast: ToastController) {
    this.imageDestination = this.imageFromProfilePage;
}

public ngAfterViewInit() {
  this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      modal: true,
      scalable: true,
      aspectRatio: 1,
      // autoCropArea: 1,
      wheelZoomRatio: 0.8,
      viewMode: 2,
      center: true,
      // responsive: true,
      movable: true,
      minContainerWidth: window.innerWidth,
      minContainerHeight: 200,
      zoomOnTouch: true,
      zoomOnWheel: true,
      crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.imageDestination = canvas.toDataURL('image/png', 0.1);
      },
      cropend: () => {
        console.log('The crop ended');
      }
  });
}

public ngOnInit() {
  let cropperContainer = document.getElementsByClassName('cropper-container') as HTMLCollectionOf<HTMLElement>;
  console.log(cropperContainer.item(1));

  window.addEventListener('touchstart', (e) => {
    console.log(e);
    e.stopPropagation();
    e.preventDefault(); //Most important
  })
  console.log(this.imageFromProfilePage);
  this.uploadedPhotoURL = this.imageFromProfilePage.dataUrl;

  // Since I am using this Cropper in a Modal, it needs to
  // load AFTER the modal loads. SetTimeout was the solution here.
  setTimeout(() => {
    let cropperCanvas = document.getElementsByClassName('cropper-canvas')as HTMLCollectionOf<HTMLElement>;
    console.log(cropperCanvas);
    // The Canvas can be no bigger than the Container
    // cropperCanvas.item(0).style.maxHeight = '100px';
  }, 0);
}

  back() {
    this.modal.dismiss();
  }

  crop(imageDestination) {
    console.log('cropping');
    this.modal.dismiss(
      imageDestination
    );

  }
}
