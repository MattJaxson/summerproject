import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  changePassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.changePassword =  this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      reTypeNewPassword: ['', Validators.required]
    });
  }

  confirmChangedPassword() {
    console.log('Confirming changed password');
    this.router.navigate(['/home/profile/change-password/confirm']);
  }

  cancel() {
    console.log('change password cancelled');
    this.router.navigate(['/home/profile']);
  }

}
