import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { MyPostsPageRoutingModule } from './my-posts-routing.module';

import { MyPostsPage } from './my-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomComponentsModule,
    ReactiveFormsModule,
    IonicModule,
    MyPostsPageRoutingModule
  ],
  declarations: [MyPostsPage]
})
export class MyPostsPageModule {}
