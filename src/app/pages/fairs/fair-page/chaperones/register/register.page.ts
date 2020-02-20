import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, NavController } from '@ionic/angular';
import { FairsService } from '../../../../../services/fairs.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, AfterViewInit {

  registerForm: FormGroup;
  @ViewChild('autoFucousInput', {static: false})  inputElement: IonInput;
  id;
  title;

  schoolList =  ['School 1', 'School 2', 'School 3'];
  gradeList =  ['7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private navCtrl: NavController,
    private loading: LoadingController,
    private toast: ToastController) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      school: ['', [Validators.required, Validators.required]],
      phone: ['', [Validators.required, Validators.required]],
      gender: ['', [Validators.required, Validators.required]],
      lunch: ['', [Validators.required, Validators.required]]
    });


    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');

    this.id = id;

    this.fairs.getFair(this.id).subscribe(
      fair => {
        console.log('Fair ID: ' + this.id);
        console.log(fair);
        this.title = fair['title'];
      }
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
       this.inputElement.setFocus();
    }, 1000);
  }

  register(chaperone) {
    console.log('Registering');
    this.fairs.registerChaperone(chaperone);
  }

  goBack() {
    console.log('going back');
    this.navCtrl.back();
  }


  // Send Email to Student
  // SMS to phones

}
