import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';

import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {
  changeEmail: FormGroup;
  activeEmail = '';

  formValid: Boolean;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppercase character, and one number.'}
    ]
  };


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toast: ToastController,
    private alertController: AlertController,
    private profile: ProfileService
    ) {
      this.activeEmail = this.profile.email.getValue();
      console.log('Active Email: ' + this.activeEmail);
     }

  ngOnInit() {

    this.changeEmail =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    this.changeEmail.valueChanges.subscribe( _ => {
      setTimeout(() => {
        if (this.changeEmail.valid) {
          this.formValid = true;
        } else {
          this.formValid = false;
        }
      }, 100);
    });
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'There was an error with your password or email. Please try again.',
      duration: 5000,
      cssClass: 'wrong-password-toast',
      keyboardClose: true,
      position: 'top',

    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header: 'Invalid Email',
      message: 'New Email cannot be the same as the current one.',
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

  confirmChangedEmail(newEmail, password) {
    if (newEmail == this.activeEmail) {
      // Show an alert telling the user that they can't use the same email
      this.presentAlert();
    }
    else {
      this.profile.changeEmail(newEmail, password);
    }
  }
  goBack() {
    this.router.navigate(['/home/profile']);
  }

}
