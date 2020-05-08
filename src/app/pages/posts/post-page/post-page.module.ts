import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../components/shared.module';


import { IonicModule } from '@ionic/angular';

import { PostPagePageRoutingModule } from './post-page-routing.module';

import { PostPagePage } from './post-page.page';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PostPagePageRoutingModule
  ],
  declarations: [PostPagePage]
})
export class PostPagePageModule {}
