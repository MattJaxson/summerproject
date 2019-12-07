import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-resume',
  templateUrl: './update-resume.page.html',
  styleUrls: ['./update-resume.page.scss'],
})
export class UpdateResumePage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  updateResume() {
    console.log('Going to Update Resume Confirm');
    this.router.navigate(['/home/profile/resume/confirm']);
  }

  cancel() {
    console.log('change email password cancelled');
    this.router.navigate(['/home/profile']);
  }

}
