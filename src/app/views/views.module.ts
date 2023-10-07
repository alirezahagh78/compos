import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StaticComponent } from './static/static.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StaticComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
  ],
  // exports: [ViewsHomeComponent]
})
export class ViewsModule { }
