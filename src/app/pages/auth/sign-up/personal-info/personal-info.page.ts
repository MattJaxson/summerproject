import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit, OnDestroy {
  userInfoForm: FormGroup;

  constructor(
    // private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required, Validators.minLength(5)],
      gender: ['', Validators.required],
      dob: ['', [Validators.required, Validators.email]],
      school: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

  ngOnDestroy() {
    // this.registerUser().unsubscribe();
    // console.log('Unsubscribed from Registered User Observable');
  }

  goToProfilePicturePage() {
    let name = this.userInfoForm.controls.name.value;
    name = this.auth.userInfo;
    this.auth.checkUserInfo(name);
    this.router.navigate(['/personal-info/profile-picture']);
    }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }
  // registerUser() {
  //   this.auth.register(this.credentialsForm.value).subscribe(res => {
  //     console.log('Values to be registered: ' + this.credentialsForm.value.toString());
  //     // Call Login to automatically login the new user
  //     // this.auth.login(this.credentialsForm.value).subscribe();
  //   });
  }

  // registerUser() {
  //   return this.auth.register('Tony', 'eddielacrosse2@gmail.com', '12345').subscribe(data => {
  //     console.log('POST Request is sucessful', data);
  //   }, error => {
  //     console.log('Error', error);
  //   });
  // }


