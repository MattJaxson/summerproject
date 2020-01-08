import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  enterCodeForm: FormGroup;
  code = '';
  userEmail = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.enterCodeForm =  this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.userEmail = this.activatedRoute.snapshot.paramMap.get('email');

    this.generateCode(6).then(code => {
      console.log(`Sent Email to ${this.userEmail}`);
      this.auth.sendEmailWithCode(code, this.userEmail);
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
  this.generateCode(6).then(code => {
    console.log('Data: ' + code);
    this.auth.sendEmailWithCode(code, this.userEmail);
  });
 }

  thankYouPage() {
    console.log('Thank you page');
    this.auth.register();
    this.router.navigate(['/personal-info/profile-picture/upload-resume/login-credentials/enter-code/:email/thank-you-page']);
  };

  cancel() {
    console.log('Sign up cancelled');
    this.router.navigate(['']);
  }

}
