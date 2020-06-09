import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit, AfterViewInit {

  @ViewChild('ioninput', {static: false})  inputElement: IonInput;
  userInfoForm: FormGroup;

  validationMessasges = {
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ],
    phone: [
      // tslint:disable-next-line: max-line-length
      { type: 'text', message: 'Phone Number has to be 10 digits (xxx) xxx - xxxx'}
    ]
  };

  fullNamePattern = '/^([^0-9]*)$/';
  phonePattern = '';

  constructor(
    // private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      fullName: ['', Validators.compose([
        Validators.required ])],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
     ])],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      gender: ['', Validators.required],
      // Date of Birth
      dob: ['', [Validators.required]],
      school: ['', Validators.required],
      grade: ['', Validators.required],
    });

    this.formOnChanges();
  }


  goToProfilePicturePage(data) {
    console.log(data);
    this.auth.getPersonalInfo(data);
    this.router.navigate(['/personal-info/profile-picture']);
    }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

  formOnChanges(): void {
    console.log(this.userInfoForm);


    this.userInfoForm.statusChanges.subscribe(
      status => {
        if ( status === 'VALID') {
          console.log('you did it bruh');
        }

        console.log(this.userInfoForm);
      }
    );

    this.userInfoForm.controls.fullName.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );

    this.userInfoForm.controls.addressOne.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.addressTwo.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.phone.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.city.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.state.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.zip.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.gender.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.dob.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.school.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
    this.userInfoForm.controls.grade.statusChanges.subscribe(
      data => {
        console.log(data);
      }
    );
  }

}


