import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { logging } from 'protractor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, OnDestroy {
  credentialsForm: FormGroup;


  constructor(
    // private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnDestroy() {
    // this.loginrUser().unsubscribe();
    console.log('Unsubscribed from Registered User Observable');
  }

  // onSubmit() {
  //   this.auth.login(this.credentialsForm.value).subscribe();
  // }


  }
