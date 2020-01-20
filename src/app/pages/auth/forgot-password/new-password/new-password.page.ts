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
  code: string;
  userEmail: string;

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

cancel() {
    console.log('Forgotten password cancelled');
    this.router.navigate(['']);
  }

}
