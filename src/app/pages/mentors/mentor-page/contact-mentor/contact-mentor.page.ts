import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.service';
import { MentorsService } from '../../../../services/mentor.service';



@Component({
  selector: 'app-contact-mentor',
  templateUrl: './contact-mentor.page.html',
  styleUrls: ['./contact-mentor.page.scss'],
})
export class ContactMentorPage implements OnInit {

  contactMenorForm: FormGroup;
  mentorId;
  mentorName;
  mentorEmail;
  message;

  userEmail;
  userName;
  userCity;
  userState;
  userAge;
  userGrade;
  userSchool;
  userProfilePicture;
  userResume;

  constructor(
    private profile: ProfileService,
    private mentors: MentorsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {

    this.contactMenorForm = this.formBuilder.group({
      message: ['This is a message', Validators.required]
    });

    this.message = this.contactMenorForm.value.message;

        // tslint:disable-next-line: radix
    const id  = this.activatedRoute.snapshot.paramMap.get('id');
    // tslint:disable-next-line: radix
    const email  = this.activatedRoute.snapshot.paramMap.get('email');
    // tslint:disable-next-line: radix
    const name  = this.activatedRoute.snapshot.paramMap.get('name');

    this.mentorId = id;
    this.mentorName = name;
    this.mentorEmail = email;

    // Get User details
    this.userDetails();

  }

  async confirm(value) {
    await this.sendMessage();
    // tslint:disable-next-line: max-line-length
    await this.router.navigate(['/home/mentors/mentor-page/:name/:title/:email/:description/:photo/:city/:state/contact-mentor/:name/:email/confirm', this.mentorName, this.mentorEmail]);
  }

  userDetails() {
    this.profile.getUserDetails().subscribe( details => {
      this.userEmail = details['email'];
      this.userName = details['fullName'];
      this.userCity = details['city'];
      this.userState = details['state'];
      this.userAge = details['age'];
      this.userGrade = details['grade'];
      this.userSchool = details['school'];
      this.userProfilePicture = details['profilePicture'];
      this.userResume = details['resume'];
    });
  }

  sendMessage() {
   this.mentors.sendMentorAnEmail(
      this.message,
      this.mentorName,
      this.mentorEmail,
      this.userEmail,
      this.userName,
      this.userCity,
      this.userState,
      this.userAge,
      this.userGrade,
      this.userSchool,
      this.userProfilePicture,
      this.userResume
    ).subscribe();
  }

}
