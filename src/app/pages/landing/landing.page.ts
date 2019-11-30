import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit, OnDestroy {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.loginrUser().unsubscribe();
    console.log('Unsubscribed from Registered User Observable');
  }

  loginUser() {
    if (Error) {
      // Future: Write better Error handling code
      console.log(Error);
      console.log('Log in failed');
    } else {
      this.authService.login('eddielacrosse2@gmail.com', '12345').subscribe(data => {
        console.log(data);
      });
    }
  }

}
