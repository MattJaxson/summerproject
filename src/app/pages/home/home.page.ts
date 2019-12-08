import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  private state: Observable<object>;
  jobs = [
    {
      id: 1,
      name: 'Web Developer Intern',
      posted: '3 Days Ago',
      companyName: 'Journi',
      // tslint:disable-next-line: max-line-length
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 2,
      name: 'Teacher Assistant',
      posted: '1 Days Ago',
      companyName: 'DPS',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    },
    {
      id: 3,
      name: 'Quicken Loans Event',
      posted: 'Today',
      companyName: 'Quicken Loans',
      description: 'This is a description. I am putting a lot of text here just so that I know how much space I am working with for each description.'
    }

  ];

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {

  }

  jobPage(job) {
    console.log('Going to specific Job Page');
    // state object after url has to be an object for navigate()
    this.router.navigate(['/home/home/job-page', job.id, job.name, job.posted, job.companyName, job.description]);
    console.log(job.name);
  }


}
