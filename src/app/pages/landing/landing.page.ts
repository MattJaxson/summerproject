import { Component, OnInit, ViewChild,  } from '@angular/core';
import { IonSlide, IonSlides, IonToolbar, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('slider', {static: true}) slider: IonSlides;
  @ViewChild('desktopToolbar', {static: true}) desktopToolbar: IonToolbar;

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    // autoplay: {
    // delay: 7000
    // },
    loop: true
  };

  constructor(
    private router: Router,
    private alert: AlertController
  ) { }

  ngOnInit() {
  }

  fairsPage() {
    this.router.navigate(['fairs']);
    // this.presentAlert();
  }

  next() {
    this.slider.slideNext();
  }

  prev() {
    this.slider.slidePrev();
  }

  toolbarWatcher() {
    this.desktopToolbar.color = 'light';
  }


}
