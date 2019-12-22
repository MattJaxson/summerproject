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
export class LandingPage implements OnInit, OnDestroy {
  loginForm: FormGroup;


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
      password: ['eddie2', [Validators.required, Validators.minLength(5)]]
    });
    this.wrongPasswordToast();
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



  ngOnDestroy() {
    // this.auth.login().unsubscribe();
    console.log('Unsubscribed from Registered User Observable');
  }

  login(data) {
    this.presentLoading();
    this.auth.login(data);
  }


  }
