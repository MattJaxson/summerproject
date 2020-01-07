import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.page.html',
  styleUrls: ['./events-page.page.scss'],
})
export class EventsPagePage implements OnInit {
  eventId;
  eventTitle;
  eventOrganizer;
  eventDate;
  eventLocation;
  eventDescription;
  eventPhoto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
    ) { }

  ngOnInit() {
      // tslint:disable-next-line: radix
      const id  = this.activatedRoute.snapshot.paramMap.get('id');
      // tslint:disable-next-line: radix
      const title  = this.activatedRoute.snapshot.paramMap.get('title');
      // tslint:disable-next-line: radix
      const organizer  = this.activatedRoute.snapshot.paramMap.get('organizer');
      // tslint:disable-next-line: radix
      const date  = this.activatedRoute.snapshot.paramMap.get('date');
      // tslint:disable-next-line: radix
      const location  = this.activatedRoute.snapshot.paramMap.get('location');
       // tslint:disable-next-line: radix
      const description  = this.activatedRoute.snapshot.paramMap.get('description');
       // tslint:disable-next-line: radix
      const photo  = this.activatedRoute.snapshot.paramMap.get('photo');
        // tslint:disable-next-line: radix

      this.eventId = id;
      this.eventTitle = title;
      this.eventOrganizer = organizer;
      this.eventLocation = location;
      this.eventDate = date;
      this.eventDescription = description;
      this.eventPhoto = photo;
  }

}
