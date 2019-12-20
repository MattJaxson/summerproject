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
  loginForm: FormGroup;


  constructor(
    // private auth: AuthService,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['eddie@gmail.com', [Validators.required, Validators.email]],
      password: ['eddie2', [Validators.required, Validators.minLength(5)]]
    });
  }



  ngOnDestroy() {
    // this.auth.login().unsubscribe();
    console.log('Unsubscribed from Registered User Observable');
  }

  login(data) {
    this.auth.login(data);
  }


  }
