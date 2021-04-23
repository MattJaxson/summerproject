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
  downloadPrompt: any;
  downloadButton;
  

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
    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });
    // Check if app is online
    if (window.navigator.onLine === false) {
      console.log('We are OFFLINE!');
    }
    if (window.navigator.onLine === true) {
      console.log('We are ONLINE!');
      // Chrome, Edge,
    };

    let downloadFooter = document.getElementById('download-footer');
    let footerText = document.getElementById('footer-text');

    if("onbeforeinstallprompt" in window == false) {
      // setTimeout(() => {
      //   downloadFooter.style.background = "#e3405f";
      //   footerText.innerHTML = "Cannot Download App.";
      //   }, 10000);
      }
    if ("onbeforeinstallprompt" in window) {
      window.addEventListener("beforeinstallprompt", (e) => {
          setTimeout(() => {
            console.log('lol')
          }, 2000);
          e.preventDefault();
          console.log(e);
          downloadFooter.style.background = "#00c90c";
          console.log(e);
          downloadFooter.style.display = "block";
          downloadFooter.addEventListener('mouseover', (e) => {
            downloadFooter.style.background = "#52975e";
          });
          downloadFooter.addEventListener('mouseout', (e) => {
            downloadFooter.style.background = "#00c90c";
          });
          downloadFooter.addEventListener('click', () => {
            this.downloadPageLoading();
          });
          footerText.innerHTML = "<ion-icon style='font-size: 1em; animation: up-and-down 1s ease infinite forwards;' name='download-outline'></ion-icon><p style='font-size: 0.7em; margin-left: 8px; display: inline;'>Download App</p>";
          return this.auth.downloadPrompt = e;
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
  async downloadPageLoading() {
    const loading = await this.loading.create({
      message: '',
      duration: 1000,
      keyboardClose: true,
    });
    await loading.present();
    await loading.onDidDismiss().then(
      (e) => {
        this.router.navigateByUrl('download');
      });
  }
  login(data) {
    this.presentLoading();
    this.auth.login(data);
  }
  back() {
    this.router.navigate(['/landing']);
  }
  download() {
    // this.deferredPrompt.prompt();
    this.downloadPageLoading();
  }
  }
