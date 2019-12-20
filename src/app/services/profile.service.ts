import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  activeEmail = '';


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private helper: JwtHelperService,
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController) {
      this.activeEmail = this.auth.user.email;
     }

    //  Gets User Details from Server to populate the Profile tab with User information.
     getUserDetails() {
      return this.http.post('http://localhost:3000/api/home/profile', {email: this.activeEmail});
  }

    async changeEmail(activeEmail, newEmail, password) {
      // tslint:disable-next-line: max-line-length
      return this.http.post('http://localhost:3000/api/home/profile/change-email', {
        oldEmail: activeEmail,
        email: newEmail,
        password: password})
          .subscribe( data => {
            if ( data === true ) {
              this.router.navigate(['/home/profile/change-email/confirm']);
             } else {
              return console.log('Passwords dont match');
            }
      });
    }

    async changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword ) {
      return this.http.post('http://localhost:3000/api/home/profile/change-password', {
        oldPassword,
        email: activeEmail,
        newPassword,
        reTypeNewPassword
      })
        .subscribe( data => {
          if ( data === true ) {
            console.log('TRUE');
            this.router.navigate(['']);
            const toast = this.toastController.create({
              message: 'Please login with your new Password',
              duration: 3000
            });
            toast.then(t => t.present());
           } else {
             console.log('Passwords dont match!');
           }
        });
    }

    async changePhone(email, newNumber, password) {
      return await this.http.post('http://localhost:3000/api/home/profile/change-phone', {
        newNumber,
        password,
        email
      })
      .subscribe(data => {
        if ( data === true ) {
          console.log('TRUE');
          this.router.navigate(['/home/profile/change-phone/confirm']);
          const toast = this.toastController.create({
            message: 'Please login with your new Password',
            duration: 3000
          });
          toast.then(t => t.present());
         } else {
           console.log('Passwords dont match!');
         }
      });
    }

    async changeAddress(email, addressOne, addressTwo, city, state, zip, password) {
      return await this.http.post('http://localhost:3000/api/home/profile/change-address', {
        email,
        addressOne,
        addressTwo,
        city,
        state,
        zip,
        password
      }).subscribe(data => {
        if ( data === true ) {
          this.router.navigate(['/home/profile/change-address/:addressOne/:addressTwo/:city/:state/:zip/confirm']);
         } else {
          return console.log('Passwords dont match');
        }
  });
    }

    async changeSchool(email, newSchool, newGrade, password) {
      return await this.http.post('http://localhost:3000/api/home/profile/change-school', {
        email,
        newSchool,
        newGrade,
        password
      }).subscribe(data => {
        if ( data === true ) {
          this.router.navigate(['/home/profile/change-school/:school/confirm']);
         } else {
          return console.log('Passwords dont match');
        }
      });
    }

    // Delete User
  delete() {
    console.log('Deleted User');
  }
}
