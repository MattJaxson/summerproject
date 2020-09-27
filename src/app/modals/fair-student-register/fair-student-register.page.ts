import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-fair-student-register',
  templateUrl: './fair-student-register.page.html',
  styleUrls: ['./fair-student-register.page.scss'],
})
export class FairStudentRegisterPage implements OnInit {
  registered = false;
  resgisterForm: FormGroup;

  public interests = [
    { val: 'Automotive Mobility', isChecked: true },
    { val: 'Artificial Intelligence', isChecked: false },
    { val: 'Coding', isChecked: false },
    { val: 'Computer Science', isChecked: false },
    { val: 'Cyber Security', isChecked: false },
    { val: 'Digital Media', isChecked: false },
    { val: 'Engineering', isChecked: false },
    { val: 'Graphic Design', isChecked: false },
    { val: 'Robotics', isChecked: false },
    { val: 'Software Development', isChecked: false },
    { val: 'Video Game Design', isChecked: false }
  ];

  constructor(
    private modal: ModalController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.resgisterForm = this.formBuilder.group({
      fullName: ['', Validators.required, Validators.name],
      email: ['', [Validators.required, Validators.email]],
      grade: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      school: ['', [Validators.required]],
      interests: ['', [Validators.required]],
    });
  }

  cancel() {
    this.modal.dismiss();
 }

 registerStudent() {
  this.registered = true;
 }

 confirm() {
  this.modal.dismiss();
 }

}
