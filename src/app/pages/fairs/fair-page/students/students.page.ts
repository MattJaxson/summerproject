import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, IonContent } from '@ionic/angular';
import { FairsService } from 'src/app/services/fairs.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  @ViewChild('boothPartners', {static: false}) boothPartners: ElementRef;
  @ViewChild('findFind', {static: false}) findFair: ElementRef;

  id: string;
  title: string;
  time: string;
  date: string;
  slots: object[];

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
        this.slots = Object.values(fair['agenda']);
        console.log(this.slots);
      }
    );
  }

  goHome() {
    console.log('going home');
    this.router.navigate(['landing']);
  }

  goBack() {
    console.log('going back');
    this.navCtrl.back();
  }

  register() {
    this.router.navigate(['/fairs/fair-page/students/:id/register', this.id]);
  }

  boothPartnersPage() {
    this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
  }

  findFairLocation() {
    this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
  }

}