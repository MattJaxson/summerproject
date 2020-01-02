import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.page.html',
  styleUrls: ['./mentors.page.scss'],
})
export class MentorsPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  mentorPage() {
    this.router.navigate(['/home/mentors/mentor-page']);
  }

}
