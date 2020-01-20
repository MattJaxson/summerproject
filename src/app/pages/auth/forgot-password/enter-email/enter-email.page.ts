import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.page.html',
  styleUrls: ['./enter-email.page.scss'],
})
export class EnterEmailPage implements OnInit {
  forgotPasswordForm: FormGroup;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Please enter a valid email address'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.forgotPasswordForm =  this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    });

  }

  async goToEnterCodePage(email) {
    console.log('Going to Enter Code Page');
    // check if user exists, then navigate
    await this.auth.checkIfUserExits(email);
    await this.router.navigate(['/enter-email/enter-code/', email]);
 }

  cancel() {
    console.log('Forgotten password cancelled');
    this.router.navigate(['']);
  }

}
