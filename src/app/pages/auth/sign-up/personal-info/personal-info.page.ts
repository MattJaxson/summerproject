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
      zip: ['', Validators.required, Validators.maxLength(5)],
      gender: ['', Validators.required],
      // Date of Birth
      dob: ['', [Validators.required, Validators.email]],
      school: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
       this.inputElement.setFocus();
  }, 1000);
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

}


