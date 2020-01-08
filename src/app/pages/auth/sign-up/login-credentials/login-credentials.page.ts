import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login-credentials',
  templateUrl: './login-credentials.page.html',
  styleUrls: ['./login-credentials.page.scss'],
})
export class LoginCredentialsPage implements OnInit {
  credentialsForm: FormGroup;
  code = '';
  email;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      reTypePassword: ['', Validators.required]
    });

  }



  enterCodePage(data) {
    this.email = this.credentialsForm.controls.email.value;
    this.auth.getLoginCredentials(data);
    console.log('Going to Enter Code Page');
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/', this.email]);
  }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

}
