import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { logging } from 'protractor';
import { ToastController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  loginForm: FormGroup;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  }


  constructor(
    // private auth: AuthService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private loading: LoadingController,
    private toast: ToastController
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['eddie@gmail.com', [Validators.required, Validators.email]],
      password: ['eddie2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });
    // this.wrongPasswordToast();
  }

  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Logging in...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async wrongPasswordToast() {
    const toast = await this.toast.create({
      message: 'Wrong password. Please enter correct password.',
      position: 'bottom',
      cssClass: 'wrong-password',
      duration: 1500
    });
    toast.present();
  }

  login(data) {
    this.presentLoading();
    this.auth.login(data);
  }


  }
