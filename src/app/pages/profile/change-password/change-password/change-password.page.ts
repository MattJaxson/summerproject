import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  changePassword: FormGroup;
  activeEmail = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    ) {
      this.activeEmail = this.auth.user.email;
     }

  ngOnInit() {
    this.changePassword =  this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      reTypeNewPassword: ['', Validators.required]
    });
  }

  confirmChangedPassword(oldPassword, newPassword,  reTypeNewPassword) {
    this.auth.changePassword(this.activeEmail, oldPassword, newPassword, reTypeNewPassword);
  }

  cancel() {
    console.log('change password cancelled');
    this.router.navigate(['/home/profile']);
  }

}
