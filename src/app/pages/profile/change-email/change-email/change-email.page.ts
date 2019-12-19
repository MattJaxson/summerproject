import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {
  changeEmail: FormGroup;
  activeEmail = '';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toast: ToastController,
    private profile: ProfileService
    ) {
      this.activeEmail = this.auth.user.email;
      console.log('Active Email: ' + this.activeEmail);
     }

  ngOnInit() {
    this.changeEmail =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  confirmChangedEmail(newEmail, password) {
    this.auth.user.email = newEmail;
    this.profile.changeEmail(this.activeEmail, newEmail, password);
  }

  cancel() {
    console.log('change email password cancelled');
    this.router.navigate(['/home/profile']);
  }

}
