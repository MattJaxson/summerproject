import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscribable, Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {

  detailsSub: Subscription;


  userObject: any = {
    fullName: '',
    about: '',
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
    private toast: ToastController,
    private alert: AlertController,
    private loading: LoadingController
    ) {
    }

    ngOnDestroy() {
      this.detailsSub.unsubscribe();
      this.profile.fullName.unsubscribe();
      this.profile.about.unsubscribe();
      this.profile.city.unsubscribe();
      this.profile.state.unsubscribe();
      this.profile.zip.unsubscribe();
      this.profile.gender.unsubscribe();
      this.profile.school.unsubscribe();
      this.profile.grade.unsubscribe();
      this.profile.profilePicture.unsubscribe();
      this.profile.email.unsubscribe();
      this.profile.resume.unsubscribe();
    }

    ngOnInit() {
      this.detailsSub = this.profile.getUserDetails()
        .subscribe(
          res => {
            console.log(res);
            const fullName = res['fullName'];
            const about = res['about'];
            const city = res['city'];
            const state = res['state'];
            const zip = res['zip'];
            const gender = res['gender'];
            const dob = res['dob'];
            const school = res['school'];
            const grade = res['grade'];
            const profilePicture = res['profilePicture'];
            const resume = res['resume'];
            const email = res['email'];

            // Send initial profile values to Profile Service;
            // Have to initial these values from the Profile Component
            this.profile.fullName.next(fullName);
            this.profile.about.next(about);
            this.profile.city.next(city);
            this.profile.state.next(state);
            this.profile.zip.next(zip);
            this.profile.gender.next(gender);
            this.profile.dob.next(dob);
            this.profile.school.next(school);
            this.profile.grade.next(grade);
            this.profile.profilePicture.next(profilePicture);
            this.profile.resume.next(resume);
            this.profile.email.next(email);

            // Subscribe to all the B.Subjects to get live updates of value changes.
            this.profile.fullName.subscribe(data => {this.userObject.fullName = data;
              }
            );
            this.profile.about.subscribe(data => {
                this.userObject.about = data;
              }
            );
            this.profile.city.subscribe(data => {this.userObject.city = data;
              }
            );
            this.profile.state.subscribe(data => {
                this.userObject.state = data;
              }
            );
            this.profile.zip.subscribe(data => {this.userObject.zip = data;
              }
            );
            this.profile.gender.subscribe(data => {
                this.userObject.gender = data;
              }
            );
            this.profile.dob.subscribe(data => {this.userObject.dob = data;
              }
            );
            this.profile.school.subscribe(data => {
                this.userObject.school = data;
              }
            );
            this.profile.grade.subscribe(data => {
                this.userObject.grade = data;
              }
            );
            this.profile.profilePicture.subscribe(data => {
                this.userObject.profilePicture = data;
              }
            );
            this.profile.resume.subscribe(data => {
                this.userObject.resume = data;
              }
            );
            this.profile.email.subscribe(data => {
                this.userObject.email = data;
              }
            );
    });
  }

    clearToken() {
      // ONLY FOR TESTING!
      this.storage.remove('access_token');

      const toast = this.toast.create({
        message: 'JWT removed',
        duration: 3000
      });
      toast.then(toast => toast.present());
    }

    editPage() {
      this.router.navigate(['/home/profile/edit-profile-page']);
    }

    changeProfilePicture() {
      console.log('Navigating to Change Profile Page');
      this.router.navigate(['/home/profile/change-profile-picture', this.userObject.profilePicture]);
    }

    updateResume() {
      console.log('Navigating to Change Resume Page');
      this.router.navigate(['/home/profile/view-resume']);
    }

    async confirmLogout() {
      const toast = this.toast.create({
        message: 'User has been logged out',
        duration: 3000
      });

      const loading = await this.loading.create({
        message: 'Logging out...',
        duration: 1000
      });

      const alert = await this.alert.create({
        header: 'Logout',
        cssClass: 'alert',
        message: 'Are you sure you want to logout?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Canceling logout');
              this.profile.fullName.next('');
              this.profile.about.next('');
              this.profile.city.next('');
              this.profile.state.next('');
              this.profile.zip.next('');
              this.profile.gender.next('');
              this.profile.dob.next('');
              this.profile.school.next('');
              this.profile.grade.next('');
              this.profile.profilePicture.next('');
              this.profile.resume.next('');
              this.profile.email.next('');
              this.router.navigate(['/home/profile']);
            }
          },
          {
            text: 'Logout',
            handler: () => {
              console.log('Logging out');
              this.auth.logout();
              loading.present();
              toast.then(t => t.present());
            }}
        ]
      });

      await alert.present();
    }


}
