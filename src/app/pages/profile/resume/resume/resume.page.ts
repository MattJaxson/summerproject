import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  constructor(
    private router: Router
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
