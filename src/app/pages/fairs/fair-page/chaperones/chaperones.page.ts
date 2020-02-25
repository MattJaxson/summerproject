import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FairsService } from 'src/app/services/fairs.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-chaperones',
  templateUrl: './chaperones.page.html',
  styleUrls: ['./chaperones.page.scss'],
})
export class ChaperonesPage implements OnInit {

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
        this.slots =  fair['agenda'];
        console.log(this.slots);
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
    this.router.navigate(['/fairs/fair/:id/chaperones/:id/register', this.id]);
  }

  boothPartnersPage() {
    this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
  }

  findFairLocation() {
    this.router.navigate(['/fairs/fair/:id/students/:id/booth-partners', this.id]);
  }

  // logScrolling(event) {

  //   let boothPartners = this.boothPartners.nativeElement.getBoundingClientRect();
  //   let findFair = this.findFair.nativeElement.getBoundingClientRect();

  //   if (
  //     boothPartners.top >= 0 &&
  //     boothPartners.left >= 0 &&
  //     boothPartners.right <= (window.innerWidth || document.documentElement.clientWidth) &&
  //     boothPartners.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight + 150)
  //   ) {
  //     console.log('In the viewport!');
  //     this.boothPartners.nativeElement.className = 'booth-partners-mobile';
  //   } else {
  //     console.log('Not in the viewport... whomp whomp');
  //   }

  //   if (
  //     findFair.top >= 0 &&
  //     findFair.left >= 0 &&
  //     findFair.right <= (window.innerWidth || document.documentElement.clientWidth) &&
  //     findFair.bottom <= (window.innerHeight + 150 || document.documentElement.clientHeight + 150)
  //   ) {
  //     console.log('In the viewport!');
  //     this.findFair.nativeElement.className = 'find-fair-mobile';
  //   } else {
  //     console.log('Not in the viewport... whomp whomp');
  //   }
  // }

}
