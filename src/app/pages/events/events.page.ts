import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { format, formatDistanceToNow } from 'date-fns';
import { ToastController, IonSearchbar, LoadingController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit, AfterViewInit {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  eventsGoing;
  eventsGoingLength = 0;
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
    private toast: ToastController,
    public loading: LoadingController
    ) { }

  ngAfterViewInit() {
        this.searchbar.getInputElement().then(  (searchbarInputElement) => {
         searchbarInputElement.style.boxShadow = "none";
    });
  }

  ngOnInit() {

    // Get the User's details
    this.profile.getUserDetails().subscribe(
     details => {

       this.id = details['_id'];
       this.userEmail = details['email'];

       this.events.eventsGoing$.next(details['eventsGoing']);
       this.events.eventsGoing$.subscribe(
         events => {
           this.eventsGoingLength = Object.values(events).length;
         }
       );
       console.log('User id: ' + this.id);
       console.log('User email: ' + this.userEmail);
     });

    this.events.getEvents().subscribe( events => {

      // I am using two arrays for the same data to improve the loading of the data. As a User searches through the list events,
      // .

      console.log('Events that are intially loaded: ');
      console.log(events);

      this.allEvents = Object.values(events);
      this.allEventsLength  = this.allEvents.length;
      this.allEvents.reverse();

      this.loadedAllEvents = Object.values(events);
      this.loadedAllEvents.reverse();

      for (const event of this.allEvents) {
        event.date = format( new Date(event.date), 'MMMM dd, yyyy');
        event.time = format( new Date(event.date), 'hh:mm a');
        event.dateCreated = formatDistanceToNow( new Date(event.dateCreated), {
          includeSeconds: true,
          addSuffix: true
        });
      }
    });
  }

  eventPage(event) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/events/events-page', event._id, event.title, event.addressOne,  event.addressOne,  event.city,  event.state, event.zip, event.dateCreated, event.date, event.time, event.photo, event.description]);
  }

  going() {
    this.router.navigate(['/home/events/going']);
  }

  filter($event) {

    this.initializeItems();
    let searchTerm = $event.detail.value;

    if (!searchTerm) {
      console.log('No results returned from Search');
      this.noSearchInput = true;
    }

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
}

    initializeItems(): void {
    this.allEvents = this.loadedAllEvents;
  }

  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      duration: 1000,
      message: 'Searching for Events...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async doRefresh(event) {

    this.allEvents = [];
    await this.events.getEvents().subscribe( events => {

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

    setTimeout(() => {
      event.target.complete();
      console.log('Events Refreshed');
    }, 2000);

    await this.searchbar.getInputElement().then(  (searchbarInputElement) => {
      searchbarInputElement.value = '';
      this.noSearchInput = false;
    });

    await console.log('Refreshing Events Page..');
  }

}
