import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorsService } from '../../services/mentor.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.page.html',
  styleUrls: ['./mentors.page.scss'],
})
export class MentorsPage implements OnInit {
  allMentors;

  constructor(
    private router: Router,
    private mentors: MentorsService) { }

  ngOnInit() {
    this.mentors.getMentors().subscribe(
      mentors => {
        this.allMentors = mentors;
      }
    );
  }

  mentorPage(mentor) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/mentors/mentor-page', mentor.name, mentor.title, mentor.email, mentor.description, mentor.photo, mentor.city, mentor.state]);
  }

}
