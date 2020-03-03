// Students

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController, IonInput, NavController } from '@ionic/angular';
import { FairsService } from '../../../../../services/fairs.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, AfterViewInit {

  @ViewChild('autoFucousInput', {static: false})  inputElement: IonInput;

  registerForm: FormGroup;
  id: string;
  title: string;
  time: string;
  date: string;

  // For Checkbox
  interests = [];

  // tslint:disable-next-line: max-line-length
  schoolList =  ['Central High School', 'Communications Media Arts High School', 'Davis Aerospace Technical High School', 'Henry Ford High School', 'Martin Luther King Jr. Senior High School', 'Mumford High School', 'Pershing High School', 'Western International High School', 'West Side Academy of Technology and Cyber Security', 'University High School Academy', 'Southfield Regional Academic Campus', 'Southfield High School For The Arts And Technology', 'Hazel Park High School', 'Pontiac High', 'Pontiac International Technology Academy' ];

  gradeList =  ['10th Grade', '11th Grade', '12th Grade'];

  studentInterests = [
    { name: 'Automotive Mobility', isChecked: false },
    { name: 'Artificial Intelligence', isChecked: false },
    { name: 'Coding', isChecked: false },
    { name: 'Computer Science', isChecked: false },
    { name: 'Cyber Security', isChecked: false },
    { name: 'Digital Media', isChecked: false },
    { name: 'Engineering', isChecked: false },
    { name: 'Graphic Design', isChecked: false },
    { name: 'Robotics', isChecked: false },
    { name: 'Software Development', isChecked: false },
    { name: 'Video Game Design', isChecked: false },
  ]

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private fairs: FairsService,
    private navCtrl: NavController,
    private loading: LoadingController,
    private toast: ToastController,
    private router: Router) { }

  ngOnInit() {
    this.schoolList.sort();

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      school: ['', [Validators.required]],
      grade: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.required]],
      gender: ['', [Validators.required, Validators.required]],
      lunch: ['', [Validators.required, Validators.required]],
      interests: ['', [Validators.required, Validators.required]],
      questionOne: ['', [Validators.required, Validators.required]],
      questionTwo: ['', [Validators.required, Validators.required]],
      questionThree: ['', [Validators.required, Validators.required]],
      questionFour: ['', [Validators.required, Validators.required]],
      questionFive: ['', [Validators.required, Validators.required]],
    });

    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');

    this.id = id;

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
    student.id = this.id;
    console.log('Registering');
    this.fairs.registerStudent(student);
  }

  selectMember(data) {
    if (data.isChecked === true) {
       this.interests.push(data);
     } else {
      let newArray = this.interests.filter( (el) => {
        return el.testID !== data.testID;
     });
      this.interests = newArray;
    }
    console.log(this.interests);
   }

}
