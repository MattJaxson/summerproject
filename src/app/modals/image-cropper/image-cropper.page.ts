import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import Cropper from 'cropperjs';
import { ModalController, NavParams, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.page.html',
  styleUrls: ['./image-cropper.page.scss'],
})
export class ImageCropperPage implements OnInit, AfterViewInit {

  @ViewChild('image', { static: false })
  public imageElement: ElementRef;

  // tslint:disable-next-line: no-input-rename
  @Input('src')
  public imageSource = '../../assets/Journi_flyer-1050x750.png';

  public imageDestination: string;
  private cropper: Cropper;

  constructor(
    private modal: ModalController,
    private navParams: NavParams,
    private loading: LoadingController,
    private toast: ToastController) {
    this.imageDestination = '';
}

public ngAfterViewInit() {
  console.log('AfterViewInit');
  this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      scalable: true,
      aspectRatio: 1,
      crop: () => {
          const canvas = this.cropper.getCroppedCanvas();
          this.imageDestination = canvas.toDataURL('image/png');
      }
  });
}

public ngOnInit() {
  console.log('OnInit'); }

  back() {
    console.log('back');
    this.modal.dismiss();
  }

  crop() {
    console.log('cropping');
  }
}
