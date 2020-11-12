import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {

  slideOptions = {
    autoplay: {
      delay: 5000
    },
    speed: 1000
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginSignup() {
    this.router.navigate(['login']);
  }

  resources() {
    this.router.navigate(['resources']);
  }

  fairsPage() {
    this.router.navigate(['selection']);
  }

  scrollTracking(event) {
    console.log(event);
    const winScroll = event.detail.scrollTop;
    // const documentHeight = event.detail.scrollTop;
    // const windowHeight = event.detail.scrollTop;
    const height = event.detail.event.path[0].clientHeight;
    const scrollHeight = event.detail.event.path[0].scrollHeight;
    const scrolled = (winScroll / (scrollHeight - height)) * 100;

    console.log('ScrollTop: ', winScroll);
    console.log('Height: ', height);
    // console.log('Scroll %', scrolled);
    document.getElementById('scrollBar').style.width = scrolled + '%';
  }


}
