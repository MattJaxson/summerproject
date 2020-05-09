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
  activeEmail = this.profile.email.getValue();
  addressOne = this.profile.addressOne.getValue();
  addressTwo = this.profile.addressTwo.getValue();
  city = this.profile.city.getValue();
  state = this.profile.state.getValue();
  zip = this.profile.zip.getValue();

  constructor(
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

  }

  back() {
    this.router.navigate(['/home/profile/edit-profile-page']);
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

}
