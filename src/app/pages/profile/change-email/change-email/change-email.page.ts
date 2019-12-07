import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage implements OnInit {
  changeEmail: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.changeEmail =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  confirmChangedEmail() {
    console.log('Going to Change Password Confirm');
    this.router.navigate(['/home/profile/change-email/confirm']);
  }

  cancel() {
    console.log('change email password cancelled');
    this.router.navigate(['/home/profile']);
  }

}
