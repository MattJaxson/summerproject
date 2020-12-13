import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BACKEND_URL = environment.url;
  activeEmail = '';
  // user = {};

  fullName = new BehaviorSubject('');
  about = new BehaviorSubject('');
  city = new BehaviorSubject('');
  state = new BehaviorSubject('');
  zip = new BehaviorSubject('');
  gender = new BehaviorSubject('');
  dob = new BehaviorSubject('');
  school = new BehaviorSubject('');
  grade = new BehaviorSubject('');
  profilePicture = new BehaviorSubject('');
  resume = new BehaviorSubject('');
  email = new BehaviorSubject('');


  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private helper: JwtHelperService,
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController) {

      // Needs the User's email address from the JSON Web Token stored on device.
      this.activeEmail = this.auth.user.email;
     }

  getAllUsers() {
    return this.http.get(`${this.BACKEND_URL}/api/home/user`);
  }

  //  Gets User Details from Server to populate the Profile tab with User information.
  getUserDetails() {
      return this.http.post(`${this.BACKEND_URL}/api/home/user`, {email: this.activeEmail});
  }

  getTheirDetails(email) {
    return this.http.post(`${this.BACKEND_URL}/api/home/user/their-details`, {email});
  }

  changeEmail(activeEmail, newEmail, password) {
      // tslint:disable-next-line: max-line-length
      return this.http.post(`${this.BACKEND_URL}/api/home/user/change-email`, {
        oldEmail: this.activeEmail,
        email: newEmail,
        password: password})
          .pipe(
            catchError(e => {
              this.presentFailToast(this.activeEmail);
              throw new Error(e);
            }))
          .subscribe( data => {
            if ( data === true ) {
              this.email.next(newEmail);
              this.activeEmail = newEmail;
              this.router.navigate(['/home/profile']);
              this.presentSuccessToast();

             } else {
              this.presentFailToast(this.activeEmail);
              return console.log('Passwords dont match');
            }
      });
    }

    // Toast for Successful Change
    presentSuccessToast() {
      const successToast = this.toastController.create({
        message: 'Your Email address has been updated.',
        duration: 3000,
        cssClass: 'updated-toast',
        keyboardClose: true,
        position: 'bottom'
      });
      successToast.then(t => t.present());
    }

    presentFailToast(email) {
      // Toast for Successful Change
      const failToast = this.toastController.create({
        // tslint:disable-next-line: max-line-length
        message: `Password and Email combination do not work. Make sure that your password is correct, and that your new email is different from your current email address of ${email}`,
         duration: 9000,
        cssClass: 'wrong-password-toast',
        keyboardClose: true,
        position: 'top'
      });
      failToast.then(t => t.present());
    }

    async changePassword(activeEmail, oldPassword, newPassword, reTypeNewPassword ) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-password`, {
        oldPassword,
        email: activeEmail,
        newPassword,
        reTypeNewPassword
      })
        .subscribe( data => {
          // if the passwords match, navigate back to landing page
          if ( data === true ) {
            console.log('TRUE');
            this.router.navigate(['']);
            let toast = this.toastController.create({
              message: 'Password updated. Please login with your new password.',
              duration: 3000,
              cssClass: 'updated-toast',
              keyboardClose: true,
              position: 'bottom'
            });
            toast.then(t => t.present());
           } else {
             console.log('Passwords dont match!');
           }
        });
    }

    async changeAbout(email, newAbout, passsword) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-about`, {email, newAbout, passsword}).subscribe();
    }

    async changeSchool(email, newSchool, newGrade, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
        email,
        newSchool,
        newGrade,
        password
      }).subscribe(data => {
        if ( data === true ) {
          this.school.next(newSchool);
          this.grade.next(newGrade);
          this.router.navigate(['/home/profile']);

          let successToast = this.toastController.create({
            // tslint:disable-next-line: max-line-length
            message: 'Your school information has been updated.',
            duration: 3000,
            cssClass: 'updated-toast',
            keyboardClose: true,
            position: 'bottom'
          });

          successToast.then(t => t.present());
         } else {

          let failToast = this.toastController.create({
            // tslint:disable-next-line: max-line-length
            message: 'Please make sure your password is correct',
            duration: 3000,
            cssClass: 'wrong-password-toast',
            keyboardClose: true,
            position: 'top',
          });
          failToast.then(t => t.present());
          return console.log('Passwords dont match');
        }
      });
    }

    async changeProfilePicture(imageForm, oldPhotoKey) {
      return  this.http.post(`${this.BACKEND_URL}/api/photo/change-profile-picture`, {
        imageForm, oldPhotoKey
      }).subscribe();
    }

    async changeResume(email, newResume, password) {
      return await this.http.post(`${this.BACKEND_URL}/api/home/user/change-school`, {
        email,
        newResume,
        password
      }).subscribe(data => {
        if ( data === true ) {
          console.log('Changing Resume...');
          this.resume.next(newResume);
          this.router.navigate(['/home/user/change-school/:school/:grade/confirm']);
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
