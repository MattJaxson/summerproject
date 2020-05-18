import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mentor-page',
  templateUrl: './mentor-page.page.html',
  styleUrls: ['./mentor-page.page.scss'],
})
export class MentorPagePage implements OnInit {
  mentorName;
  mentorTitle;
  mentorEmail;
  mentorDescription;
  mentorPhoto;
  mentorCity;
  mentorState;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
     // tslint:disable-next-line: radix
     const title  = this.activatedRoute.snapshot.paramMap.get('title');
     // tslint:disable-next-line: radix
     const name  = this.activatedRoute.snapshot.paramMap.get('name');
     // tslint:disable-next-line: radix
     const email  = this.activatedRoute.snapshot.paramMap.get('email');
     // tslint:disable-next-line: radix
     const description  = this.activatedRoute.snapshot.paramMap.get('description');
     // tslint:disable-next-line: radix
     const photo  = this.activatedRoute.snapshot.paramMap.get('photo');
      // tslint:disable-next-line: radix
     const city  = this.activatedRoute.snapshot.paramMap.get('city');
      // tslint:disable-next-line: radix
     const state  = this.activatedRoute.snapshot.paramMap.get('state');

     this.mentorName = name;
     this.mentorTitle = title;
     this.mentorEmail = email;
     this.mentorDescription = description;
     this.mentorPhoto = photo;
     this.mentorCity = city;
     this.mentorState = state;
  }

  back() {
    this.router.navigate(['/home/mentors']);
  }

  contactMentor() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor', this.mentorName, this.mentorEmail, this.mentorPhoto ]);
  }

}
