import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';

import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-about',
  templateUrl: './change-about.page.html',
  styleUrls: ['./change-about.page.scss'],
})
export class ChangeAboutPage implements OnInit {
  changeAbout: FormGroup;
  activeEmail = '';
  currentAbout = '';

  formValid: boolean;

  validationMessasges = {
    about: [
      { type: 'about', message: 'Must be a 500 characters or less.'}
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
    private profile: ProfileService) { }

  ngOnInit() {

    this.activeEmail = this.profile.email.getValue();
    console.log('Active Email: ' + this.activeEmail);

    this.currentAbout = this.profile.about.getValue();
    console.log('Current About: ' + this.currentAbout);


    this.changeAbout =  this.formBuilder.group({
      about: ['', [Validators.required]],
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    this.changeAbout.valueChanges.subscribe( value => {
      console.log(value);
      if (value.about.length > 0) {
          this.formValid = true;
        } else {
          this.formValid = false;
        }
    });
  }

  back() {
    this.router.navigate(['/home/profile/edit-profile-page']);
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

  confirmChangedAbout(email, newAbout, password) {
      this.profile.changeAbout(email, newAbout, password);
  }

}
