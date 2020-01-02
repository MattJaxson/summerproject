import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
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
    private http: HttpClient,
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
    let password;
    let newPassword = this.newPasswordForm.value.newPassword;
    let reTypeNewPassword = this.newPasswordForm.value.newPassword;

    // check if passwords match
    if (newPassword !== reTypeNewPassword) {
      console.log('Passwords do not match');

    } else  {

      // find user
      await this.http.post(`${this.BACKEND_URL}/api/admin/students`, { email }).subscribe(
        user => {
          // tslint:disable-next-line: no-string-literal
          password = user['password'];

          this.http.post(`${this.BACKEND_URL}/api/home/user/change-password`, {
            password,
            email,
            newPassword,
            reTypeNewPassword
          })
            .subscribe( data => {
              // if the passwords match, navigate back to landing page
              if ( data === true ) {
                console.log('TRUE');
                this.router.navigate(['']);
                let toast = this.toast.create({
                  message: 'Please login with your new Password',
                  duration: 3000
                });
                toast.then(t => t.present());
               } else {
                 console.log('Passwords dont match!');
               }
            });
        });

      await console.log('Going to Confirm Password Change Page');
      await this.router.navigate(['/enter-email/enter-code/:email/new-password/:email/confirm']);
    }
  }

  cancel() {
    console.log('Forgotten password cancelled');
    this.router.navigate(['']);
  }

}
