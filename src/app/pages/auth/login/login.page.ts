import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ToastController, LoadingController, IonInput } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  @ViewChild('autoFocusInput', {static: false})  inputElement: IonInput;

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

    if (window.navigator.onLine === false) {
      console.log('We are OFFLINE!');
    }
    if (window.navigator.onLine === true) {
      console.log('We are ONLINE!');
    }


    // Chrome, Edge,
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt Event fired');
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      if (this.deferredPrompt) {
        this.downloadButton.style.display = 'block';
        this.downloadButton.addEventListener('click', () => {
          this.showInstallBanner();
        });
      }
      console.log('This is the stashed event');
      console.log(e);
    });
    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    console.log(this.loginForm.value);
    // this.wrongPasswordToast();


    this.downloadButton = document.getElementById('download-button');
    this.closeIPhoneInstallBannerButton = document.getElementById('close');
    this.iPhoneInstallBanner = document.getElementById('iphone-install-banner');
    this.openSafariBanner = document.getElementById('open-safari-banner');
    this.openSafariClose = document.getElementById('open-safari-close');

    const deviceType = window.navigator.userAgent;
    console.log(deviceType);

    // Safari Desktop
    if (deviceType.search('Safari' && 'Version') > -1) {
      console.log('Safari');
      this.downloadButton.innerHTML = 'Safari';
    }
     // Chrome Desktop
    if (deviceType.search('Chrome') > -1) {
      // this.downloadButton.innerHTML = 'Chrome';
    }
    // Firefox Desktop
    if (deviceType.search('Firefox') > -1) {
      this.downloadButton.innerHTML = 'Firefox';
    }
    // Edge Desktop
    if (deviceType.search('Edg') > -1) {
      this.downloadButton.innerHTML = 'Edge';
    }
    // Opera Desktop
    if (deviceType.search('OPR') > -1) {
      console.log('Opera');
      this.downloadButton.innerHTML = 'Opera';
    }

    // iOS
    // (Mobile) Safari iOS
    if (deviceType.search('Safari' && 'Version' && 'Mobile') > -1) {
      this.downloadButton.innerHTML = 'iOS Safari';
      this.downloadButton.style.display = 'block';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.iPhoneInstallBanner.style.display = 'block';
        this.closeIPhoneInstallBannerButton.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.iPhoneInstallBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) Chrome iOS
    if (deviceType.search('CriOS') > -1) {
      this.downloadButton.innerHTML = 'iOS Chrome';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.openSafariBanner.style.display = 'block';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) FireFox iOS
    if (deviceType.search('FxiOS') > -1) {
      this.downloadButton.innerHTML = 'iOS Firefox';
      this.downloadButton.style.display = 'block';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.openSafariBanner.style.display = 'block';
        this.iPhoneInstallBanner.style.display = 'none';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) Edge iOS
    if (deviceType.search('EdgiOS') > -1) {
      this.downloadButton.innerHTML = 'iOS Edge';
      this.downloadButton.style.display = 'block';
      this.downloadButton.addEventListener('click', () => {
        this.openSafariBanner.style.display = 'block';
        this.iPhoneInstallBanner.style.display = 'none';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }
    // (Mobile) Opera iOS
    if (deviceType.search('OPT') > -1) {
      this.downloadButton.innerHTML = 'iOS Opera';
      this.downloadButton.style.display = 'block';
      this.downloadButton.addEventListener('click', () => {
        console.log('Clicked Button');
        this.openSafariBanner.style.display = 'block';
        this.iPhoneInstallBanner.style.display = 'none';
        this.openSafariClose.addEventListener('click', () => {
          console.log('Closing iPhone Install banner');
          this.openSafariBanner.style.display = 'none';
        });
      });
    }

    // iPad
    if (deviceType.search('iPad') > -1) {
      this.downloadButton.innerHTML = 'iPad';
      this.downloadButton.style.display = 'block';
    }

    // Android
    // (Mobile) Chrome Android
    if (
      deviceType.search('Chrome') > -1 &&
      deviceType.search('Android') > -1
      ) {
      this.downloadButton.innerHTML = 'Chrome Android';
      this.downloadButton.addEventListener('click', () => {
        this.iPhoneInstallBanner.style.display = 'none';
        this.showInstallBanner();
      });
    }
    // (Mobile) Firefox Android
    if (
      deviceType.search('Firefox') > -1 &&
      deviceType.search('Android') > -1) {

        this.downloadButton.innerHTML = 'Firefox Android';
    }
    // (Mobile) Edge Android
    if (
      deviceType.search('EdgA') > -1) {
      this.downloadButton.innerHTML = 'Edge Android';
    }
    // (Mobile) Opera Mini Android

    // Samsung Browser
    if (deviceType.search('SamsungBrowser') > -1) {
      this.downloadButton.innerHTML = 'Samsung Browser';
    }

    // Check to see if the app is already installed on the users device
    console.log(window.navigator);

    

    // Detect if app is launched from home screen
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
      this.iPhoneInstallBanner.style.display = 'none';
      this.openSafariBanner.style.display = 'none';
      this.downloadButton.style.display = 'none';
    }
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

  ngAfterViewInit() {
      setTimeout(() => {
         this.inputElement.setFocus();
    }, 1000);
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
