import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.page.html',
  styleUrls: ['./change-address.page.scss'],
})
export class ChangeAddressPage implements OnInit {
  changeAddress: FormGroup;
  activeEmail = '';
  addressOne = '';
  addressTwo = '';
  city = '';
  state = '';
  zip = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private profile: ProfileService,
    private auth: AuthService,
    private router: Router
  ) {
    this.activeEmail = this.auth.user.email;
  }

  ngOnInit() {
    this.changeAddress = this.formBuilder.group({
      addressOne: ['', Validators.required],
      addressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      password: ['', Validators.required]
    });

     // tslint:disable-next-line: radix
    const addressOne  = this.activatedRoute.snapshot.paramMap.get('addressOne');
     // tslint:disable-next-line: radix
    const addressTwo  = this.activatedRoute.snapshot.paramMap.get('addressTwo');
     // tslint:disable-next-line: radix
    const city  = this.activatedRoute.snapshot.paramMap.get('city');
     // tslint:disable-next-line: radix
    const state  = this.activatedRoute.snapshot.paramMap.get('state');
      // tslint:disable-next-line: radix
    const zip  = this.activatedRoute.snapshot.paramMap.get('zip');

    this.addressOne = addressOne;
    this.addressTwo = addressTwo;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }

  async confirmChangeAddress(email, addressOne, addressTwo, city, state, zip, password) {
    this.profile.changeAddress(
      email,
      addressOne,
      addressTwo,
      city,
      state,
      zip,
      password
    );
  }

  cancel() {
    console.log('change email password cancelled');
    this.router.navigate(['/home/profile']);
  }

}
