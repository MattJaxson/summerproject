import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { filter } from 'rxjs/operators';

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
    let tabBar = document.getElementById('tabBar');
  }

  ngOnInit() {
    let tabBar = document.getElementById('tabBar');
    console.log(tabBar);
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(
      data => {
        console.log(data['url']);
        let url = data['url'];
        if(
          url.includes('/home/posts/post-page/') ||
          url.includes('/home/mentors/mentor-page/') ||
          url.includes('/home/posts/post-page/')
          ) {
          console.log('Hide Tab Bar!');
          let tabBar = document.getElementById('tabBar');
          tabBar.style.height = '0px'
          tabBar.style.transition = '0.2s'
        } else {
          let tabBar = document.getElementById('tabBar');
          console.log(tabBar);
          
          tabBar.style.height = '50px'
          tabBar.style.transition = '0.2s'
        }
      });
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
