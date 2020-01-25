import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthService } from '../../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-credentials',
  templateUrl: './login-credentials.page.html',
  styleUrls: ['./login-credentials.page.scss'],
})
export class LoginCredentialsPage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('autoFucousInput', {static: false})  inputElement: IonInput;

  credentialsForm: FormGroup;
  private subscription: Subscription;

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
    private auth: AuthService
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
     reTypePassword: ['', Validators.compose([
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


  enterCodePage(data) {
    this.email = this.credentialsForm.controls.email.value;
    this.auth.getLoginCredentials(data);
    console.log('Going to Enter Code Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/', this.email]);
  }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

}
