import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})

export class LandingPage implements OnInit {
  path;
  pathLength;


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

  pathScrollDraw() {
    // What % down is it?

    console.log(document.documentElement.scrollTop);

    // tslint:disable-next-line: max-line-length
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Length to offset the dashes
    const drawLength = this.pathLength * scrollPercentage;

    // console.log(scrollPercentage);
    // console.log(drawLength);

    // Draw in reverse
    this.path.style.strokeDashoffset = this.pathLength - drawLength;
  }

  scrollTracking(event) {
    // this.pathScrollDraw();
    // console.log(event);
    const winScroll = event.detail.scrollTop;
    // const documentHeight = event.detail.scrollTop;
    // const windowHeight = event.detail.scrollTop;
    const height = event.detail.event.path[0].clientHeight;
    const scrollHeight = event.detail.event.path[0].scrollHeight;
    const scrolled = (winScroll / (scrollHeight - height)) * 100;

    // Fairs Illustration
    const lady = document.getElementById('Lady');
    const message = document.getElementById('Message');
    const messageTwo = document.getElementById('Message-2');
    const studentShape = document.getElementById('student-shape');
    const chaporoneShape = document.getElementById('chaporone-shape');
    const volunteerShape = document.getElementById('volunteer-shape');
    const partnerShape = document.getElementById('partner-shape');

    // FYF App Illustration
    const phoneBody = document.getElementById('Phone');
    const phoneShadow = document.getElementById('Phone-Shadow');

    // Resources Illustration
    const resourcesBackgroundNight = document.getElementById('Resources-Background-Night');
    const sun = document.getElementById('Sun');
    const moon = document.getElementById('Moon');


    lady.style.display = 'none';
    message.style.display = 'none';
    messageTwo.style.display = 'none';
    studentShape.style.display = 'none';
    chaporoneShape.style.display = 'none';
    volunteerShape.style.display = 'none';
    partnerShape.style.display = 'none';

    resourcesBackgroundNight.attributes[1].nodeValue = 'url(#linearGradient-21)';


    phoneBody.style.display = 'none';
    phoneShadow.style.display = 'none';

    sun.style.display = 'none';
    moon.style.display = 'block';


    if (scrolled > 3) {
      lady.style.display = 'block';
    }
    if (scrolled > 3.24) {
      message.style.display = 'block';
    }
    if (scrolled > 3.3) {
      messageTwo.style.display = 'block';
    }

    if (scrolled > 11.9) {
      console.log('@ Fairs Usertype Shapes. \n');
      studentShape.style.display = 'inline-block';
    }
    if (scrolled > 13.9) {
      console.log('@ Fairs Usertype Shapes. \n');
      chaporoneShape.style.display = 'inline-block';
    }
    if (scrolled > 15.9) {
      console.log('@ Fairs Usertype Shapes. \n');
      partnerShape.style.display = 'inline-block';
    }
    if (scrolled > 17.9) {
      console.log('@ Fairs Usertype Shapes. \n');
      volunteerShape.style.display = 'inline-block';
    }

    if (scrolled > 22) {
      console.log('@ FYF App Illustration. \n');
      phoneBody.style.display = 'block';
      phoneShadow.style.display = 'block';
    }

    if (scrolled > 45) {
      console.log('@ Resources Illustration. \n');
      sun.style.display = 'block';
      moon.style.display = 'none';
      resourcesBackgroundNight.attributes[1].nodeValue = 'url(#linearGradient-20)';
      
    }
    if (scrolled > 72) {
      console.log('@ United-Way Logo. \n');
    }

    // console.log('ScrollTop: ', winScroll);
    // console.log('Height: ', height);
    console.log('Scroll %', scrolled);
    document.getElementById('scrollBar').style.width = scrolled + '%';
  }


}
