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
    // this.wrongPasswordToast();
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

  goBack() {
    this.router.navigate(['']);
  }


  }
