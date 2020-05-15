import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponentsModule } from '../../../components/custom-component.module';


import { IonicModule } from '@ionic/angular';

import { PostPagePageRoutingModule } from './post-page-routing.module';

import { PostPagePage } from './post-page.page';

@NgModule({
  imports: [
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PostPagePageRoutingModule
  ],
  declarations: [PostPagePage]
})
export class PostPagePageModule {}
