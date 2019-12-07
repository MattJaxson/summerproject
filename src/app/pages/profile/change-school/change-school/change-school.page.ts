import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-school',
  templateUrl: './change-school.page.html',
  styleUrls: ['./change-school.page.scss'],
})
export class ChangeSchoolPage implements OnInit {
  changeSchool: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.changeSchool =  this.formBuilder.group({
      newSchool: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

    confirmChangedSchool() {
      console.log('Going to Change School Confirm');
      this.router.navigate(['/home/profile/change-school/confirm']);
    }

    cancel() {
      console.log('change school cancelled');
      this.router.navigate(['/home/profile']);
    }
}
