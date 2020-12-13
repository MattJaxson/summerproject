import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from '../../../services/jobs.service';
import { ProfileService } from '../../../services/profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { differenceInYears, parseISO } from 'date-fns';
import { ViewResumePage } from 'src/app/modals/view-resume/view-resume.page';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})

export class ApplyPage implements OnInit, OnDestroy {

  public jobTitle;
  public jobCompanyName;
  public jobCompanyEmail;
  public age;
  public phoneNumber;
  public reason;

  public applyPageForm: FormGroup;
  profileSub: Subscription;
  sendAppSub: Subscription;

  private user;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobs: JobsService,
    private profile: ProfileService,
    private formBuilder: FormBuilder,
    private location: Location,
    private modal: ModalController
  ) { }
  ngOnDestroy(): void {
    this.profileSub.unsubscribe();
    // this.sendAppSub.unsubscribe();
  }

  ngOnInit() {

    // tslint:disable-next-line: radix
    const title  = this.activatedRoute.snapshot.paramMap.get('title');
    const companyName  = this.activatedRoute.snapshot.paramMap.get('companyName');
    const companyEmail  = this.activatedRoute.snapshot.paramMap.get('companyEmail');

    this.jobTitle = title;
    this.jobCompanyName = companyName;
    this.jobCompanyEmail = companyEmail;

    this.profileSub = this.profile.getUserDetails().subscribe(data => {
      this.user = data;
      this.age = differenceInYears(Date.now(), parseISO(data["dob"]));
      console.log('User\'s age: ', this.age);

      this.populateForm(this.user["phone"]);
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

  uploadResume() {
    console.log('Uploading Resume');
  }

  async viewResumeModal() {
    const modal = await this.modal.create({
      component: ViewResumePage,
      cssClass: 'my-custom-class'
    });
    await modal.present();
  }

  sendConfirmationEmail() {
    console.log('Sending confirmation email to Users email address');

  }

  finishApplication() {
    this.reason = this.applyPageForm.value.reasonTextArea;
    this.phoneNumber = this.applyPageForm.value.phoneNumber;
    console.log('Reason: ', this.reason);
    // tslint:disable-next-line: max-line-length
    this.sendAppSub = this.jobs.sendEmailApplication(this.user, this.age, this.phoneNumber, this.reason, this.jobTitle, this.jobCompanyEmail).subscribe();
    // tslint:disable-next-line: max-line-length
    this.router.navigate(['/home/jobs/job-page/:id/:title/:companyName/:companyEmail/:summary/:fullJobDescription/:rateOfPay/apply/:title/:companyEmail/:companyName/apply-confirm/', this.jobTitle, this.jobCompanyName, this.jobCompanyEmail ]);
  }

}
