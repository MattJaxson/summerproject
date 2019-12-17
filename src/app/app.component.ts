import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    // Ionic Native Plugins
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private vibration: Vibration,
    private keyboard: Keyboard,

    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#319ecb');
      // this.splashScreen.hide();
    });

    // this.authService.authenticationState.subscribe(state => {
    //   if (state) {
    //     this.router.navigate(['profile']);
    //   } else {
    //     this.router.navigate(['/']);
    //   }
    // });
  }
}
