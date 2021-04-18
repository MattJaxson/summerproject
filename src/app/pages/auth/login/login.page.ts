import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ToastController, LoadingController, IonInput, IonSpinner } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  @ViewChild('autoFocusInput', {static: false})  inputElement: IonInput;
  @ViewChild('initialLoadingIcon', {static: false})  initialLoadingIcon: IonSpinner;
  @ViewChild('initialLoadingSpinner', {static: false})  initialLoadingISpinner: HTMLImageElement;
  initialLoading = true;

  // For Download Button
  deferredPrompt: any;
  downloadButton;
  iPhoneInstallBanner: HTMLElement;
  openSafariBanner: HTMLElement;
  closeIPhoneInstallBannerButton: HTMLElement;
  openSafariClose: HTMLElement;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };


  constructor(
    // private auth: AuthService,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private loading: LoadingController,
    private toast: ToastController,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Initiate Loading
    console.log(this.initialLoadingISpinner)
    if(this.initialLoading) {
    }

    // Hide download buttons while page is loading.
    if(!this.initialLoading) {
      let downloadFooter = document.getElementById('download-footer');
      downloadFooter.style.display = 'block';
    }

    // Check if app is online
    if (window.navigator.onLine === false) {
      console.log('We are OFFLINE!');
    }
    if (window.navigator.onLine === true) {
      console.log('We are ONLINE!');
      // Chrome, Edge,
    };

    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    // Detect if app is launched from home screen
    // Safari
    if (window.navigator['standalone'] === true) {
      console.log('display-mode is standalone');
      this.iPhoneInstallBanner.style.display = 'none';
      this.openSafariBanner.style.display = 'none';
      this.downloadButton.style.display = 'none';
    }
  }
  showInstallBanner() {

    console.log('Trying to Show Install Banner ...');
    console.log(this.deferredPrompt);
    if (this.deferredPrompt === undefined) {
      console.log('This page was already installed');
      this.downloadButton.style.display = 'none';
    }
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      // Hide Download Button
      this.downloadButton.style.display = 'none';
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          this.downloadButton.style.display = 'block';
          this.downloadButton.style.margin = '0 auto 90px auto';
          console.log('User dismissed the A2HS prompt');
        }
        // We no longer need the prompt.  Clear it up.
        this.deferredPrompt = null;
      });
    }
  }
  async presentLoading() {
    const loading = await this.loading.create({
      message: 'Logging in...',
      duration: 1000,
      cssClass: 'success-toast',
      keyboardClose: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
  login(data) {
    this.presentLoading();
    this.auth.login(data);
  }
  back() {
    this.router.navigate(['/landing']);
  }
  download() {
    console.log('Attempting to download app..');
  }
  }
