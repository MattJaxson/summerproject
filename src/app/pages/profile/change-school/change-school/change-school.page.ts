import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../services/profile.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-change-school',
  templateUrl: './change-school.page.html',
  styleUrls: ['./change-school.page.scss'],
})
export class ChangeSchoolPage implements OnInit {
  changeSchool: FormGroup;
  activeEmail = '';
  school = '';
  grade = '';
  newSchool = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private profile: ProfileService,
    private auth: AuthService,
    private router: Router) {
      this.activeEmail = this.auth.user.email;
     }

  ngOnInit() {
    this.changeSchool =  this.formBuilder.group({
      newSchool: ['', Validators.required],
      newGrade: ['', Validators.required],
      password: ['', Validators.required]
    });

    const school  = this.activatedRoute.snapshot.paramMap.get('school');
    const grade  = this.activatedRoute.snapshot.paramMap.get('grade');

    this.school = school;
    this.grade = grade;
  }

    confirmChangedSchool(email, newSchool, newGrade, password) {
      this.profile.changeSchool(email, newSchool, newGrade,  password);
      // console.log('Going to Change School Confirm');
      // this.router.navigate(['/home/profile/change-school/:school/confirm']);
    }

    cancel() {
      console.log('change school cancelled');
      this.router.navigate(['/home/profile']);
    }
}
