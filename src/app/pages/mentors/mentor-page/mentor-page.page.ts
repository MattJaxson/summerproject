import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-page',
  templateUrl: './mentor-page.page.html',
  styleUrls: ['./mentor-page.page.scss'],
})
export class MentorPagePage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  contactMentor() {
    this.router.navigate(['/home/mentors/mentor-page/contact-mentor']);
  }

}
