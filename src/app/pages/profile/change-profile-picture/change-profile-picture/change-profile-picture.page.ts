import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile-picture',
  templateUrl: './change-profile-picture.page.html',
  styleUrls: ['./change-profile-picture.page.scss'],
})
export class ChangeProfilePicturePage implements OnInit {
  changePicture: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.changePicture =  this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
    confirmChangeProfilePicture() {
      console.log('Going to Change Picture Confirm');
      this.router.navigate(['/home/profile/change-profile-picture/confirm']);
    }

    cancel() {
      console.log('change phone number cancelled');
      this.router.navigate(['/home/profile']);
    }

    // Not finished
    useCamera() {
      console.log("Accessing Phone's Camera to gather Photo");

      this.router.navigate(['/home/profile/confirm-photo']);
    }

    // Not finished
    upload() {
      console.log("Accessing Phone's File System to gather Photo");
      this.router.navigate(['/home/profile/confirm-photo']);
    }
}
