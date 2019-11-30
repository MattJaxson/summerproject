import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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
    this.registerUser().unsubscribe();
    console.log('Unsubscribed from Registered User Observable');
  }

  registerUser() {
    return this.authService.register('Tony', 'eddielacrosse2@gmail.com', '12345').subscribe(data => {
      console.log('POST Request is sucessful', data);
    }, error => {
      console.log('Error', error);
    });
  }

}
