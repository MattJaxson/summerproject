import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCredentialsPageRoutingModule } from './login-credentials-routing.module';

import { LoginCredentialsPage } from './login-credentials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginCredentialsPageRoutingModule
  ],
  declarations: [LoginCredentialsPage]
})
export class LoginCredentialsPageModule {}
