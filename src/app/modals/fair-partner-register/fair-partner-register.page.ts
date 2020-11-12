import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, ModalController, LoadingController,  NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FairsService } from 'src/app/services/fairs.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, throwError } from 'rxjs';
import { ImageCropperPage } from '../image-cropper/image-cropper.page';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-fair-partner-register',
  templateUrl: './fair-partner-register.page.html',
  styleUrls: ['./fair-partner-register.page.scss'],
})
export class FairPartnerRegisterPage implements OnInit, OnDestroy {
  registered = false;
  resgisterForm: FormGroup;
  formData: FormData;
  registerPartnerSubscription: Subscription;
  partnerObject = {
    id: '',
    name: '',
    organization: '',
    lunch: '',
    logo: '',
    phone: '',
    colleagues: '',
    description: '',
    email: '',
    gender: '',

  };

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    phone: [
      { type: 'pattern', message: 'Phone number must be 10 digits, ei (734)123-4567.'}
    ]
  };

  lunches = [
    'Ham',
    'Turkey',
    'Veggietarian'
  ];
  uploadedPhoto: boolean;
  uploadedPhotoURL;

  constructor(
    private _modal: ModalController,
    private photo: PhotoService,
    private alert: AlertController,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private navParams: NavParams,
    private loading: LoadingController) { }

    ngOnDestroy(): void {
      this.registerPartnerSubscription.unsubscribe();
    }

    ngOnInit() {
    this.resgisterForm = this.formBuilder.group({
      name: ['Eddie', Validators.required],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      phone: ['7342237792', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9 ]{10}')]],
      organization: ['Journi', [Validators.required]],
      description: ['This is a description', [Validators.required]],
      colleagues: ['Eddie', [Validators.required]],
    });

    this.partnerObject.id = this.navParams.get('id');
    }

    cancel() {
    this._modal.dismiss();
    }

 selectLunch(e) {
  console.log('Added Lunch ' + e.detail.value);
  this.partnerObject.lunch = e.detail.value;
 }

 selectGender(e) {
  console.log('Added Gender ' + e.detail.value);
  this.partnerObject.gender = e.detail.value;
 }

getFormData(event) {

  const reader = new FileReader();
  const formElement = document.querySelectorAll('form');

  console.log(event);
  console.log('Reader Results from File Input');

  console.log(reader.result);

  formElement.forEach(form => {
    if ( form.id === 'proPicForm') {
      console.log('Got Form: ',  form);
      this.formData = new FormData(form);
      console.log('Form data: ', this.formData);
      this.uploadedPhoto = true;
    }
   });

  reader.addEventListener('load',  async () => {
    this.uploadedPhotoURL = reader.result;
    // console.log('Before cropping: ' + reader.result);
    await this.cropPhoto(this.uploadedPhotoURL);
  }, true);

  if (formElement) {
    console.log(event.target.files[0]);
    return reader.readAsDataURL(event.target.files[0]);
  }
}

async cropPhoto(uploadedPhotoURL) {
  const _modal = await this._modal.create({
    component: ImageCropperPage,
    cssClass: 'image-cropper',
    componentProps: {
      uploadedPhotoURL
    }
  });

  await _modal.present();

  _modal.onDidDismiss().then(data => {
    this.uploadedPhotoURL = data.data;
    console.log('After cropping: ' +  data);

  });
}

 registerPartner() {
  // this.registered = true;
  this.uploadedPhoto = true;
  const formData = new FormData();
  const photoFile = new File([this.dataURLtoBlob(this.uploadedPhotoURL)], 'logo.png');

  formData.append('booth-partner-logo', photoFile);

  this.partnerObject.name = this.resgisterForm.value['name'];
  this.partnerObject.email = this.resgisterForm.value['email'];
  this.partnerObject.phone = this.resgisterForm.value['phone'];
  this.partnerObject.colleagues = this.resgisterForm.value['colleagues'];
  this.partnerObject.organization = this.resgisterForm.value['organization'];
  this.partnerObject.description = this.resgisterForm.value['description'];

  if (this.uploadedPhoto === true) {
    this.photo.boothPartnerLogo(formData).subscribe(
      data => {

        this.presentLoading();
        console.log(data);
        console.log('Image Upload API Successful');
        this.partnerObject.logo = data['objectUrl'];

        if (
            !this.resgisterForm.valid ||
            !this.partnerObject.id ||
            !this.partnerObject.name ||
            !this.partnerObject.phone ||
            !this.partnerObject.gender ||
            !this.partnerObject.email ||
            !this.partnerObject.logo ||
            !this.partnerObject.organization ||
            !this.partnerObject.description ||
            !this.partnerObject.lunch ||
            !this.partnerObject.colleagues) {
              console.log('Please answer all the questions!');
              console.log(this.partnerObject);
              return this.presentFormAlert();

            } 
      });
  }
 }

 async presentFormAlert() {
  const alert = await this.alert.create({
    // tslint:disable-next-line: max-line-length
    message: 'Please fill out the entire form.',
    // cssClass: ''
    buttons: [
      {
        text: 'Okay',
        role: 'cancel'
      }
    ]
  });

  await alert.present();
}
async presentEmailTakenAlert() {
 const alert = await this.alert.create({
   // tslint:disable-next-line: max-line-length
   message: 'This email has already been registered as a Partner. Please use another email, or contact us if you believe your email has been used without your permission.',
   // cssClass: ''
   buttons: [
     {
       text: 'Okay',
       role: 'cancel'
     }
   ]
 });

 await alert.present();
}

  resize() {
  // define width to resize
  const resizeWidth = 1200;
}

  confirm() {
  this._modal.dismiss();
 }

 async presentLoading() {
  const loading = await this.loading.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 2000
  });
  await loading.present();
  this.registerPartnerSubscription = this.fairs.registerPartner(this.partnerObject).pipe(
    catchError((error: HttpErrorResponse) => {

      if ( error.error === 'A Partner already has that email address' ) {
        console.log('A Partner already has that email address');

        this.presentEmailTakenAlert();
        return throwError;
      }
    })
  )
  .subscribe(
    () => {
       console.log('REGISTERED PARTNER TO FAIR!');
       this.registered = true;
     }
   );
  console.log(this.partnerObject);

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}

  dataURLtoBlob(dataurl) {
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
