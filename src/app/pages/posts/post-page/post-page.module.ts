import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';

import { IonicModule } from '@ionic/angular';

import { PostPagePage } from './post-page.page';
import { PostPagePageRoutingModule } from './post-page-routing.module';
import { ReplyCommentPageModule } from 'src/app/modals/reply-comment/reply-comment.module';
import { ReportCommentPageModule } from 'src/app/modals/report-comment/report-comment.module';
import { EditCommentPageModule } from 'src/app/modals/edit-comment/edit-comment.module';
import { RepliesPagePageModule } from 'src/app/modals/replies-page/replies-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PostPagePageRoutingModule,
    CustomComponentsModule,
    ReplyCommentPageModule,
    ReportCommentPageModule,
    EditCommentPageModule,
    RepliesPagePageModule

      ],
  declarations: [PostPagePage]
})
export class PostPagePageModule {}
