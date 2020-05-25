import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.page.html',
  styleUrls: ['./change-phone.page.scss'],
})
export class ChangePhonePage implements OnInit {
  changePhone: FormGroup;
  activeEmail = this.profile.email.getValue();
  activePhone = this.profile.phone.getValue();
  disabled = true;

  formValid: Boolean;

  validationMessasges = {
    phone: [
      { type: 'text', message: 'Phone number has to be 10 digits long'}
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
    this.changePhone =  this.formBuilder.group({
      newNumber: ['', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.required])],
      password: ['', Validators.required]
    });

    this.changePhone.valueChanges.subscribe( _ => {
      setTimeout(() => {
        if (this.changePhone.valid) {
          this.formValid = true;
        } else {
          this.formValid = false;
        }
      }, 100);
    })
  }

  back() {
    console.log('change phone number cancelled');
    this.router.navigate(['/home/profile/edit-profile-page']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header: 'Already Using This Number',
      message: 'You are already using this phone number.',
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

  confirmChangedPhoneNumber(newNumber, password) {
    if (newNumber == this.activePhone) {
      this.presentAlert();
    } else {
      this.profile.changePhone(this.activeEmail, newNumber, password);
    }
  }

  // formOnChanges(): void {
  //   this.changePhone.statusChanges.subscribe(
  //     status => {
  //       console.log(status);

  //       if (status === 'VALID') {
  //         this.disabled = false;
  //       }
  //     }
  //   );
  // }

}
