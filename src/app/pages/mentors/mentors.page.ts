import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorsService } from '../../services/mentor.service';
import { IonSearchbar, LoadingController, ModalController } from '@ionic/angular';
import { NewMessageMentorPage } from 'src/app/modals/new-message-mentor/new-message-mentor.page';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.page.html',
  styleUrls: ['./mentors.page.scss'],
})
export class MentorsPage implements OnInit {

  @ViewChild(IonSearchbar, { static: false }) searchbar: IonSearchbar;

  allMentors;
  loadedAllMentors;
  searching = false;
  noSearchInput = false;
  searchTerm;
  allMentorsLength;
  loadedAllEvents;

  constructor(
    private router: Router,
    private mentors: MentorsService,
    public loading: LoadingController,
    private modal: ModalController) { }

  ngOnInit() {
    this.getMentors();
  }

  getMentors() {
    this.mentors.getMentors().subscribe(
      mentors => {
        this.allMentors = Object.values(mentors);
        this.allMentorsLength = this.allMentors.length;
        this.allMentors.reverse();

        this.loadedAllMentors = Object.values(mentors);
        this.loadedAllMentors.reverse();
        this.searching = false;
      }
    );
  }

  chat() {
    this.router.navigate(['/home/mentors/mentor-chat']);
  }

  async newMessage() {

    const newMessageModalConfig = await this.modal.create({
      component: NewMessageMentorPage,
      componentProps: {

      }
    });
    await newMessageModalConfig.present();

  }

  mentorPage(mentor) {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/mentors/mentor-page', mentor.name, mentor.title, mentor.email, mentor.description, mentor.photo, mentor.city, mentor.state]);
  }

  filter($event) {

    this.initializeItems();
    let searchTerm = $event.detail.value;

    this.presentLoadingWithOptions();
    console.log(this.allMentors);
    this.allMentors = this.allMentors.filter( currentMentors => {
      console.log(currentMentors);

      if (!currentMentors || !searchTerm  ) {

        console.log('No results from that search');
        this.noSearchInput = true;

      }

      if ( currentMentors.name && searchTerm) {

        if (currentMentors.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {

          console.log(currentMentors.name);
          console.log((currentMentors));

          this.searchTerm = searchTerm;

          this.searching = true;
          this.noSearchInput = false;

          return true;
      }
        return false;
    }

  });


    this.allMentorsLength = this.allMentors.length;

    // If there are no matches with the searchTerm
    if ( this.allMentorsLength === 0 ) {

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
      this.getMentors();
    }
  }

  initializeItems(): void {
    this.allMentors = this.loadedAllMentors;
  }

  async presentLoadingWithOptions() {
    const loading = await this.loading.create({
      duration: 1000,
      message: 'Searching for Mentors...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
