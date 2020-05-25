import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  changePassword: FormGroup;
  activeEmail = '';
  passwordsMatch = false;

  validationMessasges = {
    password: [
      { type: 'password', message: 'Please enter a valid password.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private alertController: AlertController,
    private profile: ProfileService
    ) {
      this.activeEmail = this.auth.user.email;
     }

  ngOnInit() {
    this.changePassword =  this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
     reTypeNewPassword: ['', Validators.compose([
      Validators.minLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
   ])]
    });

    this.formOnChanges();
  }

  back() {
    this.router.navigate(['/home/profile/edit-profile-page']);
  }

  formOnChanges(): void {
    console.log(this.changePassword);
    this.changePassword.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.changePassword.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            this.passwordsMatch = true;
          }
        });

        if (this.changePassword.controls.newPassword.value === this.changePassword.controls.reTypeNewPassword.value &&
          this.changePassword.controls.newPassword.touched ) {
          console.log('Passwords Match');
      }

        if (this.changePassword.controls.newPassword.value !== this.changePassword.controls.reTypeNewPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header: 'Invalid Password',
      message: 'New password cannot be the same as the current one.',
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

  confirmChangedPassword(oldPassword, newPassword, reTypeNewPassword) {
    if (oldPassword == newPassword) {
      // Show an alert telling the user that they can't use the same email
      this.presentAlert();
    }
    else {
      this.profile.changePassword(this.activeEmail, oldPassword, newPassword, reTypeNewPassword);
    }
  }
  
}
