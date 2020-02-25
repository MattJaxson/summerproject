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
    speed: 1000,
    autoplay: {
    delay: 7000
    },
    loop: true
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.slider.getActiveIndex();
  }

  fairsPage() {
    this.router.navigate(['fairs']);
  }


  endSlide() {
    console.log('slide ended');
  }

}
