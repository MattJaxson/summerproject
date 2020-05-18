import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { CustomComponentsModule } from '../../components/custom-component.module';
import { ProfilePageRoutingModule } from './profile-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    CustomComponentsModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }])
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
