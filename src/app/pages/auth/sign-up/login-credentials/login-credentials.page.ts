import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput, AlertController } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-credentials',
  templateUrl: './login-credentials.page.html',
  styleUrls: ['./login-credentials.page.scss'],
})
export class LoginCredentialsPage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('autoFucousInput', {static: false})  inputElement: IonInput;

  credentialsForm: FormGroup;

  passwordsMatch = false;
  code = '';
  email;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Please enter a valid email address'}
    ],
    password: [
      { type: 'password', message: 'Please enter a valid password.'}
    ]
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private alert: AlertController
    ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
     reTypePassword: ['Lacrosse2', Validators.compose([
      Validators.minLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
   ])]
  });

    this.formOnChanges();
}

  ngAfterViewInit() {
    setTimeout(() => {
       this.inputElement.setFocus();
  }, 1000);
}

ngOnDestroy() {
  console.log('Being Destroyed');
}

formOnChanges(): void {
  console.log(this.credentialsForm);
  this.credentialsForm.valueChanges
  .subscribe(
    data => {
      console.log(data);

      this.credentialsForm.statusChanges.subscribe(status => {
        console.log(status);
        if ( status === 'VALID') {
          console.log('you did it bruh');
          this.passwordsMatch = true;
        }
      });

      if (this.credentialsForm.controls.password.value === this.credentialsForm.controls.reTypePassword.value &&
        this.credentialsForm.controls.password.touched &&
        this.credentialsForm.controls.email.valid) {
        console.log('Passwords Match');
    }

      if (this.credentialsForm.controls.password.value !== this.credentialsForm.controls.reTypePassword.value) {
      console.log('Passwords dont match');
      this.passwordsMatch = false;
  }
    }
  );
}


  enterCodePage(email, password) {
    this.email = this.credentialsForm.controls.email.value;
    this.auth.doesUserExists(email, password)
    .pipe(
      catchError(e => {
        console.error(e);
        if (e.error.msg === 'User already registered with that email address.') {
          return this.userAlreadyExistAlert();
        }
      }))
    .subscribe(value  => {
      console.log(value);
      const exists = value['exists'];
      if ( exists === false) {
        this.auth.getLoginCredentials(email, password);
        console.log('Going to Enter Code Page');
        this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/', this.email]);

      }
    });
  }

  async userAlreadyExistAlert() {
    const alert = await this.alert.create({
      cssClass: 'danger-alert',
      message: 'This user already exists.',
      buttons: ['OK']
    });

    await alert.present();
  }



  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

}
