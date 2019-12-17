import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  data = '';

  constructor(
    private auth: AuthService,
    private storage: Storage,
    private router: Router,
    private toastController: ToastController) {}

    ngOnInit() {
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
      this.router.navigate(['/home/profile/change-school']);

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
      console.log('Logging Out...');
      this.router.navigate(['/home/profile/logout']);
      // this.auth.logout();
    }


}
