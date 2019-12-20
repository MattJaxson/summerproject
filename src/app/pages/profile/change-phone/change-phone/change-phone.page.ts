import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-change-phone',
  templateUrl: './change-phone.page.html',
  styleUrls: ['./change-phone.page.scss'],
})
export class ChangePhonePage implements OnInit {
  changePhone: FormGroup;
  activeEmail = '';
  activePhone = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private profile: ProfileService
    ) {
      this.activeEmail = this.auth.user.email;
      // this.auth.getPhoneNumber(this.activeEmail);
    }

  ngOnInit() {
    this.changePhone =  this.formBuilder.group({
      newNumber: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  confirmChangedPhoneNumber(newNumber, password) {
    this.profile.changePhone(this.activeEmail, newNumber, password);
    // console.log('Going to Change Phone Number Confirm');
    // this.router.navigate(['/home/profile/change-phone/confirm']);
  }

  cancel() {
    console.log('change phone number cancelled');
    this.router.navigate(['/home/profile']);
  }

}
