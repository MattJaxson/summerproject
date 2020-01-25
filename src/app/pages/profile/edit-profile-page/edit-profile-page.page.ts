import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.page.html',
  styleUrls: ['./edit-profile-page.page.scss'],
})
export class EditProfilePagePage implements OnInit {

  userObject: any = {
    fullName: '',
    addressOne: '',
    addressTwo: '',
    phone: '',
    city: '',
    state: '',
    zip: '',
    gender: '',
    dob: '',
    school: '',
    grade: '',
    profilePicture: '',
    resume: '',
    email: ''
  };
  user: any;

  constructor(
    private auth: AuthService,
    private profile: ProfileService,
    private storage: Storage,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  changeEmail() {
    console.log('Navigating to Change Email Page');
    this.router.navigate(['/home/profile/change-email']);

  }

  changeAddress() {
    console.log('Navigating to Change Address Page');
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/profile/change-address/', this.userObject.addressOne, this.userObject.addressTwo, this.userObject.city, this.userObject.state, this.userObject.city, ]);
    // Delete params

  }
  changePassword() {
    console.log('Navigating to Change Password Page');
    this.router.navigate(['/home/profile/change-password']);

  }
  changePhoneNumber() {
    console.log('Navigating to Change Phone Number Page');
    this.router.navigate(['/home/profile/change-phone', this.userObject.phone]);

  }
  changeSchool() {
    console.log('Navigating to Change School Page');
    this.router.navigate(['/home/profile/change-school', this.userObject.school, this.userObject.grade]);

  }
  changeProfilePicture() {
    console.log('Navigating to Change Profile Page');
    this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);

  }
  updateResume() {
    console.log('Navigating to Change Resume Page');
    this.router.navigate(['/home/profile/resume',  this.userObject.resume]);

  }

  logout() {
    this.router.navigate(['/home/profile/logout']);
  }

}
