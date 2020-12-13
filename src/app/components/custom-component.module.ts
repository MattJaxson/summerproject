import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeartIconComponent } from './heart-icon/heart-icon.component';
import { GoingIconComponent } from './going-icon/going-icon.component';
import { NotGoingIconComponent } from './not-going-icon/not-going-icon.component';
import { FollowIconComponent } from './follow-icon/follow-icon.component';
import { UpDownVoteButtonsComponent } from './up-down-vote-buttons/up-down-vote-buttons.component';
import { CommentVoteBarComponent } from './comment-vote-bar/comment-vote-bar.component';
import { FollowCommentButtonsComponent } from './follow-comment-buttons/follow-comment-buttons.component';
import { ReadMoreComponent } from './read-more/read-more.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        HeartIconComponent,
        GoingIconComponent,
        NotGoingIconComponent,
        FollowIconComponent,
        UpDownVoteButtonsComponent,
        CommentVoteBarComponent,
        FollowCommentButtonsComponent,
        ReadMoreComponent
    ],
    exports: [
        HeartIconComponent,
        GoingIconComponent,
        NotGoingIconComponent,
        FollowIconComponent,
        UpDownVoteButtonsComponent,
        CommentVoteBarComponent,
        FollowCommentButtonsComponent,
        ReadMoreComponent
    ]
})
export class CustomComponentsModule {}
