import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  id: string;

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
    private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');

    this.id = id;
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
    this.router.navigate(['/fairs/fair/:id/students/:id/register', this.id]);
  }

  boothPartners() {
    this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
  }


}
