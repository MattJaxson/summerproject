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
      this.auth.sendEmailWithCodeForgotPassword(code, this.userEmail);
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

//  async sendNewCode() {
//   this.generateCode(6).then(code => {
//     console.log('Data: ' + code);
//     this.auth.sendEmailWithCodeForgotPassword(code);
//   });
//  }

  newPasswordPage() {
    if (this.enterCodeForm.controls.code.value !== this.code) {
      // Throw error here? Toast maybe?
      console.log('Codes do not match');
    } else {
      console.log('Codes matched');
      this.router.navigate(['/enter-email/enter-code/:email/new-password', this.userEmail]);
    }
  }

  cancel() {
    console.log('Forgot password cancelled');
    this.router.navigate(['']);
  }

}
