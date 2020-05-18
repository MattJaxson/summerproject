import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  mentorName: string;
  mentorEmail: string;
  mentorPhoto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.mentorName = this.activatedRoute.snapshot.paramMap.get('name');
    this.mentorEmail = this.activatedRoute.snapshot.paramMap.get('email');
    this.mentorPhoto = this.activatedRoute.snapshot.paramMap.get('photo');

    console.log('Mentor Photo:');
    console.log(this.mentorName);

    setTimeout(() => {
      this.router.navigate(['/home/mentors']);
    }, 9000);
  }

}
