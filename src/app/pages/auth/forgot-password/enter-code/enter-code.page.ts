import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  enterCodeForm: FormGroup;
  code = '';
  userEmail = '';

  validationMessasges = {
    code: [
      { type: 'text', message: 'The codes do not match'}
    ]
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastController) { }

  ngOnInit() {
    this.enterCodeForm =  this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');

    this.generateCode(6).then(code => {
      this.auth.sendEmailWithCodeForgotPassword(code, this.userEmail);
    });

    this.formOnChanges();

  }

  formOnChanges(): void {
    console.log(this.enterCodeForm);
    this.enterCodeForm.valueChanges.subscribe( data => {
        console.log(data);
      });
  }

  async generateCode(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('Generated Code: ' + result);
    return this.code = result;
 }


  newPasswordPage(newPassword) {
    console.log('New Password: ');
    console.log(newPassword);

    if (this.enterCodeForm.controls.code.value !== this.code) {
      this.presentToast();
      console.log('Codes do not match');
    } else {
      console.log('Codes matched');
      this.router.navigate(['/enter-email/enter-code/:email/new-password', this.userEmail]);
    }
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'The codes do not match. Please try again.',
      duration: 2000
    });
    toast.present();
  }

  cancel() {
    console.log('Forgot password cancelled');
    this.router.navigate(['']);
  }

}
