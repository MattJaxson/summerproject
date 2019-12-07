import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm-photo',
  templateUrl: './confirm-photo.page.html',
  styleUrls: ['./confirm-photo.page.scss'],
})
export class ConfirmPhotoPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  uploadPhoto() {
    console.log('User has successfully uploaded photo from their phones camera');
    this.router.navigate(['/home/profile/change-profile-picture/confirm']);
  }

  takeAnotherPhoto() {
    //  Access Gallery
    //  Replace last photo taken with another photo
  }

  cancel() {
    console.log('change photo cancelled');
    this.router.navigate(['/home/profile']);
  }
}
