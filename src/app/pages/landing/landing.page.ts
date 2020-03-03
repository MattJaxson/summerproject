import { Component, OnInit, ViewChild,  } from '@angular/core';
import { IonSlide, IonSlides, IonToolbar, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  id = '5e4dfde5239236ffa852a4e3';

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

  students() {
    this.router.navigate(['fairs/fair-page/students/', this.id]);
  }

  chaperones() {
    this.router.navigate(['fairs/fair-page/chaperones/', this.id]);
  }

  volunteers() {
    this.router.navigate(['fairs/fair-page/volunteers/', this.id]);
  }

  partners() {
    this.router.navigate(['fairs/fair-page/partners/', this.id]);
  }


}
