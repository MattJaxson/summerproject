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
      delay: 5000000
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

}
