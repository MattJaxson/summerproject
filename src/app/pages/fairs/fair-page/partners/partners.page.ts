import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FairsService } from 'src/app/services/fairs.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit {

  id: string;
  title: string;
  time: string;
  date: string;

  slots = [
    {
      time: '9: 00am',
      title: 'Title',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting random stuff here just so I can see what it looks like when a certain amount of words are in this area.   Gotta make sure things look right, and I have to get a better references for a certain amount of characters.'
    },
    {
      time: '9: 00am',
      title: 'Title',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting random stuff here just so I can see what it looks like when a certain amount of words are in this area.   Gotta make sure things look right, and I have to get a better references for a certain amount of characters.'
    },
    {
      time: '9: 00am',
      title: 'Title',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting random stuff here just so I can see what it looks like when a certain amount of words are in this area.   Gotta make sure things look right, and I have to get a better references for a certain amount of characters.'
    },
    {
      time: '9: 00am',
      title: 'Title',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting random stuff here just so I can see what it looks like when a certain amount of words are in this area.   Gotta make sure things look right, and I have to get a better references for a certain amount of characters.'
    },
    {
      time: '9: 00am',
      title: 'Title',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting random stuff here just so I can see what it looks like when a certain amount of words are in this area.   Gotta make sure things look right, and I have to get a better references for a certain amount of characters.'
    },
    {
      time: '9: 00am',
      title: 'Title',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting random stuff here just so I can see what it looks like when a certain amount of words are in this area.   Gotta make sure things look right, and I have to get a better references for a certain amount of characters.'
    },
];

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private fairs: FairsService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');

    this.id = id;

    this.fairs.getFair(this.id).subscribe(
      fair => {
        console.log('Fair ID: ' + this.id);
        console.log(fair);
        this.title = fair['title'];
        this.time = format( new Date(fair['date']), 'hh:mm a');
        this.date = format( new Date(fair['date']), 'MMMM dd, yyyy');
      }
    );
  }

  goHome() {
    console.log('going home');
    this.router.navigate(['']);
  }

  goBack() {
    console.log('going back');
    this.navCtrl.back();
  }

  register() {
    this.router.navigate(['/fairs/fair/:id/partners/:id/register', this.id]);
  }

  viewFAQs() {
    this.router.navigate(['/fairs/fair/:id/partners/:id/faq', this.id]);
  }

  findFair() {
    console.log('finding fair via google maps');
  }

}
