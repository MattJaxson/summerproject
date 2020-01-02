import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-mentor',
  templateUrl: './contact-mentor.page.html',
  styleUrls: ['./contact-mentor.page.scss'],
})
export class ContactMentorPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  confirm() {
    this.router.navigate(['/home/mentors/mentor-page/contact-mentor/confirm']);
  }

}
