import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.page.html',
  styleUrls: ['./job-page.page.scss'],
})
export class JobPagePage implements OnInit {
  // The state of the job page with details from selecting a specific job from the home page.
  public jobId;
  public jobName;
  public jobCompanyName;
  public jobPosted;
  public jobDescription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  applyForJob() {
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/home/job-page/:id/:name/:posted/:companyName/:description/apply',  this.jobId, this.jobName, this.jobPosted, this.jobCompanyName, this.jobDescription ]);
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const name  = this.activatedRoute.snapshot.paramMap.get('name');
    // tslint:disable-next-line: radix
    const posted  = this.activatedRoute.snapshot.paramMap.get('posted');
    // tslint:disable-next-line: radix
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
     // tslint:disable-next-line: radix
    const description  = this.activatedRoute.snapshot.paramMap.get('description');

    this.jobId = id;
    this.jobName = name;
    this.jobPosted = posted;
    this.jobCompanyName = companyName;
    this.jobDescription = description;

    console.log(this.jobName);
  }



}
