import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  activeResume = this.profile.resume.getValue();

  constructor(
    private router: Router,
    private profile: ProfileService
  ) { }

  ngOnInit() {
  }

  viewResume() {
    console.log('Going to View Resume Page');
    this.router.navigate(['/home/profile/view-resume']);
  }

  updateResume() {
    console.log('Going to Update Resume Page');
    this.router.navigate(['/home/profile/update-resume']);
  }

  cancel() {
    console.log('change phone number cancelled');
    this.router.navigate(['/home/profile']);
  }

}
