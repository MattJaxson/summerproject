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
export class PersonalInfoPage implements OnInit {

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
      fullName: ['Eddie', Validators.compose([
        Validators.required ])],
      gender: '',
      // Date of Birth
      dob: '',
      school: ['Wayne', Validators.required],
      grade: ['Senior', Validators.required],
      about: ['Wassup', Validators.required],
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
  }

}


