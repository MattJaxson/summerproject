import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeartIconComponent } from './heart-icon/heart-icon.component';
import { GoingIconComponent } from './going-icon/going-icon.component';
import { NotGoingIconComponent } from './not-going-icon/not-going-icon.component';
import { FollowIconComponent } from './follow-icon/follow-icon.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot()
     ],
    declarations: [
        HeartIconComponent,
        GoingIconComponent,
        NotGoingIconComponent,
        FollowIconComponent
    ],
    exports: [
        HeartIconComponent,
        GoingIconComponent,
        NotGoingIconComponent,
        FollowIconComponent
    ]
})
export class SharedModule {}