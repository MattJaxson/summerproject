import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  tabsPlacement = 'bottom';
  tabsLayout = 'icon-top';

  constructor(
    private platform: Platform,
    private auth: AuthService,
    private router: Router,
    // private studentChat: StudentChatService,
    // private mentorChat: MentorChatService
  ) {
    this.initializeApp();
    
  }

  ngOnInit() {

    
  }

  ngOnDestroy() {
    this.auth.authenticationState.unsubscribe();
  }

  initializeApp() {
    this.auth.checkToken();
    this.platform.ready().then(() => {
    });

    // State for the User. If Authentication State == False, the app reverts back to the landing page
    this.auth.authenticationState.subscribe(async state => {
      if (state) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  createOnline$() {
    
  }
}
