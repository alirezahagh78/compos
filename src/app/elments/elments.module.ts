import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElmentsRoutingModule } from './elments-routing.module';
import { ElemntsHomeComponent } from './elements-home/elemnts-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { RepeatTemplateDirective } from './repeat-template.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElemntsHomeComponent,
    PlaceHolderComponent,
    RepeatTemplateDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElmentsRoutingModule,
    SharedModule
  ],
  // exports: [ElemntsHomeComponent]
})
export class ElmentsModule { }
