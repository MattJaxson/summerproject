import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReplyCommentPageRoutingModule } from './reply-comment-routing.module';

import { ReplyCommentPage } from './reply-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReplyCommentPageRoutingModule
  ],
  declarations: [ReplyCommentPage]
})
export class ReplyCommentPageModule {}
