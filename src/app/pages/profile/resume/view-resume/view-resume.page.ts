import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.page.html',
  styleUrls: ['./view-resume.page.scss'],
})
export class ViewResumePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/home/profile/resume/<resume>']);
  }

  updateResume() {
    console.log('Updating Resume from View Resume page');
    this.router.navigate(['/home/profile/update-resume']);
  }

}
