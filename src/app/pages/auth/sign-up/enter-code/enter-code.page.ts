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
  disabled = true;
  code = '';
  userEmail = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private toast: ToastController) { }

  ngOnInit() {
    this.enterCodeForm =  this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(6)]]
    });

    this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');

    this.generateCode(6).then(code => {
      console.log(`Sent Email to ${this.userEmail}`);
      this.auth.sendEmailWithCode(code, this.userEmail);
    });

    this.formOnChanges();

  }

  formOnChanges(): void {
    console.log(this.enterCodeForm);
    this.enterCodeForm.valueChanges.subscribe( data => {
       console.log(data);

       if (data.code === this.code) {
          console.log('codes match');
          this.disabled = false;
        }

       if (data.code !== this.code) {
          this.disabled = true;
        }
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

 async sendNewCode() {
  await this.generateCode(6).then(code => {
    console.log('Data: ' + code);
    this.auth.sendEmailWithCode(code, this.userEmail);
  });

  await this.presentNewCodeToast(this.userEmail);
 }

  thankYouPage() {
    if (this.enterCodeForm.controls.code.value !== this.code) {
      this.presentErrorToast();
      console.log('Codes do not match');
    }
    console.log('Thank you page');
    this.auth.register();
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page']);
  };

  async presentCodesMatchedToast() {
    const toast = await this.toast.create({
      message: 'Codes Matched!',
      duration: 2000,
      cssClass: 'wrong-password-toast',
      keyboardClose: true,
      position: 'top',
    });
    toast.present();
  }
  async presentErrorToast() {
    const toast = await this.toast.create({
      message: 'The codes do not match. Please try again.',
      duration: 2000,
      cssClass: 'wrong-password-toast',
      keyboardClose: true,
      position: 'top',
    });
    toast.present();
  }

  async presentNewCodeToast(email) {
    const toast = await this.toast.create({
      message: `New Code sent to ${email}`,
      duration: 2000,
      cssClass: 'success-toast',
      keyboardClose: true,
      position: 'top',
    });
    toast.present();
  }

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

}
