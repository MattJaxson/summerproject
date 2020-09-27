import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fair-partner-register',
  templateUrl: './fair-partner-register.page.html',
  styleUrls: ['./fair-partner-register.page.scss'],
})
export class FairPartnerRegisterPage implements OnInit {
  registered = false;
  resgisterForm: FormGroup;

  constructor(
    private modal: ModalController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.resgisterForm = this.formBuilder.group({
      fullName: ['', Validators.required, Validators.name],
      email: ['', [Validators.required, Validators.email]],
      lunch: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      school: ['', [Validators.required]],
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
