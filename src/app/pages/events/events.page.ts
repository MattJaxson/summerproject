import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EventsService } from '../../services/events.service';
import { format, formatDistanceToNow } from 'date-fns';
import {IonSearchbar, LoadingController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { EventsEventEmitterService } from 'src/app/emitters/events-event-emitter.service';
import { isAfter } from 'date-fns';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  eventsSub: Subscription;
  profileSub: Subscription;
  eventsGoingSub: Subscription;
  deleteEventSub: Subscription;
  routerSub: Subscription;
  eventsGoing;
  eventsGoingLength;
  searching = false;
  noSearchInput = false;
  searchTerm;
  allEvents;
  allEventsLength;
  loadedAllEvents;
  userEmail;
  id;

  constructor(
    private router: Router,
    private events: EventsService,
    private profile: ProfileService,
    public loading: LoadingController,
    private eventEmitterService: EventsEventEmitterService
    ) { }
  ngOnInit() {
    this.deleteEvent();
    this.trackRoute();

    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeEventsPageRefresh.subscribe(() => {
        this.getEvents();
      });
    }

    // Get the User's details
    this.profileSub = this.profile.getUserDetails().subscribe( details => {

      this.id = details['_id'];
      this.userEmail = details['email'];

      this.events.eventsGoing$.next(details['eventsGoing']);

      this.eventsGoingSub = this.events.eventsGoing$.subscribe(
        events => {
          console.log(events.length);
          this.eventsGoingLength = events.length;
        }
      );
      console.log('User id: ' + this.id);
      console.log('User email: ' + this.userEmail);
    });

    this.eventsGoing = this.events.getEvents().subscribe( events => {

      // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
      // .

      // First Array of Events
      // this.allEvents = Object.values(events);
      this.allEvents = Object.values(events);
      this.allEventsLength  = this.allEvents.length;
      this.allEvents.reverse();

      console.log(this.allEvents);

      // Second Array of Events
      this.loadedAllEvents = Object.values(events);
      this.loadedAllEvents.reverse();

      // Loop each Event and format the dates. Also, delete an Event if its scheduled date
      for (const event of this.allEvents) {
        // First date Event Date
        // Second date Current Date

        // If the Current Date is After the Event Date, Delete
        // If True, Delete event.

        if (isAfter(new Date(Date.now()), new Date(event.date))) {
          this.deleteEventSub = this.events.deleteEvent(event._id).subscribe();
        }

        event.date = format( new Date(event.date), 'MMMM dd, yyyy');
        event.time = format( new Date(event.date), 'hh:mm a');
        event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    });
  }
  trackRoute() {
    this.routerSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {
        console.log(data['url']);
        let url = data['url'];
        if(url.includes('/home/events/event-page/')) {
          console.log('Hide Tab Bar!');
          let tabBar = document.getElementById('tabBar');
          tabBar.style.height = '0px'
          tabBar.style.transition = '1s'
        } else {
          let tabBar = document.getElementById('tabBar');
          console.log(tabBar);
          tabBar.style.height = '50px'
          tabBar.style.transition = '1s'
        }
      });
  }
  deleteEvent() {
    var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11));
    console.log(result);

  }

    eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

    myEvents() {
    this.router.navigate(['/home/events/going']);
  }

    filter($event) {

    this.initializeItems();
    let searchTerm = $event.detail.value;

    this.presentLoadingWithOptions();

    this.allEvents = this.allEvents.filter( currentEvents => {
      console.log(currentEvents);

      if (!currentEvents || !searchTerm  ) {

        console.log('No results from that search');
        this.noSearchInput = true;

      }

      if ( currentEvents.title && searchTerm) {

        if (currentEvents.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {

          console.log(currentEvents.title);
          console.log((currentEvents));

          this.searchTerm = searchTerm;

          this.searching = true;
          this.noSearchInput = false;

          return true;
        }
        return false;
      }

      this.noSearchInput = true;

  });


    this.allEventsLength = this.allEvents.length;

    // If there are no matches with the searchTerm
    if ( this.allEventsLength === 0 ) {

      console.log('No results from that search');
      this.searching = true;
      this.searchTerm = searchTerm;

      this.searchbar.getInputElement().then(  (searchbarInputElement) => {
        searchbarInputElement.value = '';
      });
      this.noSearchInput = true;
    }

    if (!searchTerm) {
      console.log('Search term is empty; showing all events instead');
      this.noSearchInput = false;
      this.searching = false;
      this.getEvents();
    }
    }

    initializeItems(): void {
    this.allEvents = this.loadedAllEvents;
  }

  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      duration: 1000,
      message: 'Searching for Events...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      keyboardClose: false
    });
    return await loading.present();
  }

  async doRefresh(event) {

    this.allEvents = [];
    this.eventsSub = this.events.getEvents().subscribe( events => {

      this.allEvents = Object.values(events);
      this.allEventsLength = this.allEvents.length;
      this.allEvents.reverse();
      this.searching = false;

      // Format Times
      for (const event of this.allEvents) {
        // First date Event Date
        // Second date Current Date

        // If the Current Date is After the Event Date, Delete
        // If True, Delete event.

        if (isAfter(new Date(Date.now()), new Date(event.date))) {
          this.deleteEventSub = this.events.deleteEvent(event._id).subscribe();
        }
        event.date = format( new Date(event.date), 'MMMM dd, yyyy');
        event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
        event.time = format( new Date(event.date), 'hh:mm a');
      }
    });

    setTimeout(() => {
      event.target.complete();
      console.log('Events Refreshed');
    }, 2000);

    await console.log('Refreshing Events Page..');
  }

  async getEvents() {
    this.eventsSub = this.events.getEvents().subscribe( events => {

      this.allEvents = Object.values(events);
      this.allEventsLength = this.allEvents.length;
      this.allEvents.reverse();
      this.searching = false;

      // Format Times
      for (const event of this.allEvents) {
        event.date = format( new Date(event.date), 'MMMM dd, yyyy');
        event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
        event.time = format( new Date(event.date), 'hh:mm a');
      }
    });
  }

}
