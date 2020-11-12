import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FairsService } from 'src/app/services/fairs.service';
import { Subscription, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';


@Component({
  selector: 'app-fair-chaperone-register',
  templateUrl: './fair-chaperone-register.page.html',
  styleUrls: ['./fair-chaperone-register.page.scss'],
})
export class FairChaperoneRegisterPage implements OnInit, OnDestroy {
  registered = false;
  resgisterForm: FormGroup;
  registerChaperoneSubscription: Subscription;
  chaperoneObject = {
    id: '',
    name: '',
    email: '',
    school: '',
    phone: '',
    lunch: '',
    gender: ''
  }

  schools = [
    'Martin Luther King High School',
    'Cass Technical High School',
    'Renaissance High School'
  ];

  lunches = [
    'Ham',
    'Turkey',
    'Veggietarian'
  ];

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    phone: [
      { type: 'pattern', message: 'Phone number must be 10 digits, ei (734)123-4567.'}
    ]
  };

  constructor(
    private modal: ModalController,
    private alert: AlertController,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private navParams: NavParams) { }

    ngOnDestroy(): void {
      this.registerChaperoneSubscription.unsubscribe();
    }

    ngOnInit() {
      this.resgisterForm = this.formBuilder.group({
        name: ['Eddie', Validators.required],
        email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9 ]{10}')]],
      });
      this.chaperoneObject.id = this.navParams.get('id');

      this.resgisterForm.statusChanges.subscribe(
        status => console.log(status)
      );
    }

    cancel() {
      this.modal.dismiss();
   }

   selectSchool(e) {
    console.log('Added School ' + e.detail.value);
    this.chaperoneObject.school = e.detail.value;
  }

  selectLunch(e) {
    console.log('Added Lunch ' + e.detail.value);
    this.chaperoneObject.lunch = e.detail.value;
  }

  selectGender(e) {
    console.log('Added Gender ' + e.detail.value);
    this.chaperoneObject.gender = e.detail.value;
  }

   registerStudent() {
    // Check to see if the user has answered all the questions
  

    this.chaperoneObject.name = this.resgisterForm.value['name'];
    this.chaperoneObject.email = this.resgisterForm.value['email'];
    this.chaperoneObject.phone = this.resgisterForm.value['phone'];

    if (
      !this.resgisterForm.valid ||
      !this.chaperoneObject.id ||
      !this.chaperoneObject.name ||
      !this.chaperoneObject.phone ||
      !this.chaperoneObject.gender ||
      !this.chaperoneObject.email ||
      !this.chaperoneObject.lunch ) {
        console.log('Please answer all the questions!');
        console.log(this.chaperoneObject);
        return this.presentFormAlert();
    } else {

      this.registerChaperoneSubscription = this.fairs.registerChaperone(this.chaperoneObject).pipe(
        catchError((error: HttpErrorResponse) => {

          if ( error.error === 'A Chaperone already has that email address' ) {
            console.log('A Chaperone already has that email address');

            this.presentEmailTakenAlert();
            return throwError;
          }
        })
      )
      .subscribe(
        () => {
           console.log('REGISTERED CHAPERONE TO FAIR!');
           this.registered = true;
         }
       );
      console.log(this.chaperoneObject);

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
     message: 'This email has already been registered as a Chaperone. Please use another email, or contact us if you believe your email has been used without your permission.',
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

   confirm() {
    this.modal.dismiss();
   }

}
