import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  emailCode: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailCode =  this.formBuilder.group({
      code: ['', Validators.required],
    });
  }

  goToThankYouPage() {
    console.log('Going to Enter Code Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/thank-you-page']);
  }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

}
