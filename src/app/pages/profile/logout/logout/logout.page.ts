import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  confirmLogout() {
    console.log('Going to Logout Confirm');
    this.router.navigate(['/home/profile/logout/confirm']);
  }

  cancel() {
    console.log('change school cancelled');
    this.router.navigate(['/home/profile']);
  }

}
