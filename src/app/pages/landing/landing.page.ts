import { Component, OnInit, ViewChild,  } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  @ViewChild('slider', {static: true}) slider: IonSlides;

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.sliderInit();
  }

  fairsPage() {
    this.router.navigate(['fairs']);
  }

  sliderInit() {
    setTimeout(() => {
      this.slider.slideNext(500);
    }, 7000);
  }

}
