import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  newPassword: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.newPassword =  this.formBuilder.group({
      newPassword: ['', Validators.required]
    });
  }

  goToConfirmPage() {
    console.log('Going to Enter Code Page');
    this.router.navigate(['/enter-email/new-password/confirm']);
  }

  cancel() {
    console.log('Forgotten password cancelled');
    this.router.navigate(['']);
  }

}
