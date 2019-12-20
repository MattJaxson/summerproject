import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {
  activeEmail = '';
  user = null;

  constructor(
    private auth: AuthService,
    private profile: ProfileService,
    private storage: Storage,
    private router: Router,
    private toastController: ToastController) {
      this.activeEmail = this.auth.user.email;
    }

    ngOnInit() {
      this.user = this.profile.getUserDetails().subscribe(data => {
        console.log(data);
        this.user = data;
      });
    }

    ngOnDestroy() {

    }

    clearToken() {
      // ONLY FOR TESTING!
      this.storage.remove('access_token');

      let toast = this.toastController.create({
        message: 'JWT removed',
        duration: 3000
      });
      toast.then(toast => toast.present());
    }

    changeEmail() {
      console.log('Navigating to Change Email Page');
      this.router.navigate(['/home/profile/change-email']);

    }

    changeAddress() {
      console.log('Navigating to Change Address Page');
      // tslint:disable-next-line: max-line-length
      this.router.navigate(['/home/profile/change-address/', this.user.addressOne, this.user.addressTwo, this.user.city, this.user.state, this.user.city, ]);

    }
    changePassword() {
      console.log('Navigating to Change Password Page');
      this.router.navigate(['/home/profile/change-password']);

    }
    changePhoneNumber() {
      console.log('Navigating to Change Phone Number Page');
      this.router.navigate(['/home/profile/change-phone']);

    }
    changeSchool() {
      console.log('Navigating to Change School Page');
      this.router.navigate(['/home/profile/change-school', this.user.school, this.user.grade]);

    }
    changeProfilePicture() {
      console.log('Navigating to Change Profile Page');
      this.router.navigate(['/home/profile/change-profile-picture']);

    }
    updateResume() {
      console.log('Navigating to Change Resume Page');
      this.router.navigate(['/home/profile/resume']);

    }
    logout() {
      this.router.navigate(['/home/profile/logout']);
      // this.auth.logout();
    }


}
