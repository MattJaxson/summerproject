import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../../../services/jobs.service';
import { ProfileService } from '../../../services/profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})

export class ApplyPage implements OnInit {

  public jobTitle;
  public jobCompanyName;
  public jobCompanyEmail;
  public applyPageForm: FormGroup;

  protected user;
  private userPhoneNumber;
  private userResume

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobs: JobsService,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {

    // tslint:disable-next-line: radix
    const title  = this.activatedRoute.snapshot.paramMap.get('title');
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
    const companyEmail  = this.activatedRoute.snapshot.paramMap.get('companyEmail');

    this.jobTitle = title;
    this.jobCompanyName = companyName;
    this.jobCompanyEmail = companyEmail;

    this.profile.getUserDetails().subscribe(data => {
      let user = data;
      let userPhoneNumber = data["phone"];
      let userResume = data["resume"]

      this.user = user;
      this.userPhoneNumber = userPhoneNumber
      this.userResume = userResume

      this.populateForm(userPhoneNumber);
    });
  }

  goBack() {
    this.location.back();
  }

  populateForm(phoneNumber) {
    this.applyPageForm = this.formBuilder.group({
      phoneNumber : [phoneNumber, Validators.compose([
        Validators.required,
        Validators.maxLength(10)
      ])],
      reasonTextArea : ["", Validators.compose([Validators.maxLength(2500)])]
    });
  }

  viewResume() {
    console.log('Viewing Resume');
  }

  uploadResume() {
    console.log('Uploading Resume');

  }

  sendConfirmationEmail() {
    console.log('Sending confirmation email to Users email address');

  }

  finishApplication() {
    this.jobs.sendEmailApplication(this.user).subscribe();
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail ]);
  }

}
