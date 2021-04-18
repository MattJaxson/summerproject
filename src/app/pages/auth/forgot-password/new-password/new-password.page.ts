import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  BACKEND_URL = environment.url;
  newPasswordForm: FormGroup;

  passwordsMatch = false;
  code: string;
  userEmail: string;

  validationMessasges = {
    password: [
      { type: 'password', message: 'Please enter a valid password.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastController) { }

  ngOnInit() {
    this.newPasswordForm =  this.formBuilder.group({
      newPassword: ['', Validators.required],
      reTypeNewPassword: ['', Validators.required],
    });

    this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');

    console.log('Email: ' + this.userEmail);

    this.formOnChanges();
  }
  formOnChanges(): void {
    console.log(this.newPasswordForm);
    this.newPasswordForm.valueChanges
    .subscribe(
      data => {
        console.log(data);
        this.newPasswordForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            // console.log('you did it bruh');
          }
        });
        console.log(this.newPasswordForm.controls.newPassword.value)
        console.log(this.newPasswordForm.controls.reTypeNewPassword.value)
        if (this.newPasswordForm.controls.newPassword.value === this.newPasswordForm.controls.reTypeNewPassword.value &&
          this.newPasswordForm.controls.newPassword.touched) {
            this.passwordsMatch = true;
            console.log('Passwords Match');
            this.passwordMatchToast();
      }

        if (this.newPasswordForm.controls.newPassword.value !== this.newPasswordForm.controls.reTypeNewPassword.value) {
        console.log('Passwords DONT Match');
        this.passwordsMatch = false;
    }
      }
    );
  }
  async goToConfirmPage() {
    const email = this.userEmail;
    let newPassword = this.newPasswordForm.value.newPassword;
    let reTypeNewPassword = this.newPasswordForm.value.reTypeNewPassword;

    if (newPassword !== reTypeNewPassword) {
      this.presentToast();
      return console.log('passwords do not match');
    }

    await this.auth.forgotPassword(email, newPassword);

    await console.log('Going to Confirm Password Change Page');
    await this.router.navigate(['/enter-email/enter-code/:email/new-password/:email/confirm']);
  }
  async presentToast() {
      const toast = await this.toast.create({
        message: 'The two passwords you entered do not match. Please try again.',
        duration: 2000
      });
      toast.present();
  }
  async passwordMatchToast() {
      const toast = await this.toast.create({
        message: 'Passwords Match!',
        cssClass: 'success-toast',
        duration: 2000
      });
      toast.present();
  }
  cancel() {
    console.log('Forgotten password cancelled');
    this.router.navigate(['']);
  }
  back() {
    this.router.navigate(['/enter-email/enter-code']);
  }

}
