import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, NavController } from '@ionic/angular';
import { FairsService } from '../../../../../services/fairs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, AfterViewInit {

  registerForm: FormGroup;
  @ViewChild('autoFucousInput', {static: false})  inputElement: IonInput;
  fair = 'Tech Fair';

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
    // private auth: AuthService,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private navCtrl: NavController,
    private loading: LoadingController,
    private toast: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      school: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.required]],
      gender: ['', [Validators.required, Validators.required]],
      lunch: ['', [Validators.required, Validators.required]],
      questionOne: ['', [Validators.required, Validators.required]],
      questionTwo: ['', [Validators.required, Validators.required]],
      questionThree: ['', [Validators.required, Validators.required]],
      questionFour: ['', [Validators.required, Validators.required]],
      questionFive: ['', [Validators.required, Validators.required]],
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
       this.inputElement.setFocus();
    }, 1000);
  }

  goBack() {
    console.log('going back');
    this.navCtrl.back();
  }

  register(student) {
    console.log('Registering');
    this.fairs.registerStudent(student);
  }

  // Send Email to Student
  // SMS to phones

}
