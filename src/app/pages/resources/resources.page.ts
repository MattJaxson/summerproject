import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {

  resources = [
    {
      url: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/publicaccess/membershipDirectory.do?md=1',
      logo: '../../assets/logos/YDRC-logo.png',
      name: 'Detroit DRC',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
    },
    {
      url: 'https://discoveryourspark.org/program-finder/#',
      logo: '../../assets/logos/DYS-logo.png',
      name: 'Discover Your Spark',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
    },
    {
      url: 'https://gdyt.org/',
      logo: '../../assets/logos/GDYT-logo.png',
      name: "Grow Detroit's Youth Talent (GDYT)",
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
    },
    {
      url: 'https://detroitsummerguide.org/',
      logo: '../../assets/logos/DSG-logo.png',
      name: 'Detroit Summer Guide',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim just!'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doSomething(event) {
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

  back() {
    this.router.navigate(['']);
  }

}
