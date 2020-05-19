import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportCommentPageRoutingModule } from './report-comment-routing.module';

import { ReportCommentPage } from './report-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReportCommentPageRoutingModule
  ],
  declarations: [ReportCommentPage]
})
export class ReportCommentPageModule {}
