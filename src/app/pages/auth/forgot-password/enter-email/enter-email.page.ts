import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.page.html',
  styleUrls: ['./enter-email.page.scss'],
})
export class EnterEmailPage implements OnInit {
  forgotPassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.forgotPassword =  this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  goToNewPasswordPage() {
    console.log('Going to Enter Code Page');
    this.router.navigate(['/enter-email/new-password']);
  }

  cancel() {
    console.log('Forgotten password cancelled');
    this.router.navigate(['']);
  }

}
