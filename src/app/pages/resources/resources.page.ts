import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {

  resources = [
    {
      url: 'https://detroitydrc.z2systems.com/np/clients/detroitydrc/publicaccess/membershipDirectory.do?md=1',
      logo: '../../assets/ydrc.png',
      name: 'Detroit DRC',
      description: 'description'
    },
    {
      url: 'https://discoveryourspark.org/program-finder/#',
      logo: '../../assets/dys.png',
      name: 'discoveryourspark',
      description: 'description'
    },
    {
      url: 'https://gdyt.org/',
      logo: '../../assets/gdyt.png',
      name: 'gdyt',
      description: 'description'
    },
    {
      url: 'https://detroitsummerguide.org/',
      logo: '../../assets/dsg.png',
      name: 'detroitsummerguide',
      description: 'description'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
