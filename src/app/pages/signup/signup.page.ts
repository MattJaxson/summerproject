import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, OnDestroy {

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
