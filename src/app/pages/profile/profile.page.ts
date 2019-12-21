import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit, OnDestroy {


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
    private toastController: ToastController) {
    }

    ngOnInit() {
      this.profile.getUserDetails()
        .subscribe(
          res => {
            console.log(res);
            const fullName = res['fullName'];
            const addressOne = res['addressOne'];
            const addressTwo = res['addressTwo'];
            const phone = res['phone'];
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
            this.profile.addressOne.next(addressOne);
            this.profile.addressTwo.next(addressTwo);
            this.profile.phone.next(phone);
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
            this.profile.addressOne.subscribe(data => {
                this.userObject.addressOne = data;
              }
            );
            this.profile.addressTwo.subscribe(data => {this.userObject.addressTwo = data;
              }
            );
            this.profile.phone.subscribe(data => {
                this.userObject.phone = data;
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
      this.router.navigate(['/home/profile/change-address/', this.userObject.addressOne, this.userObject.addressTwo, this.userObject.city, this.userObject.state, this.userObject.city, ]);

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
