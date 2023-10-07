import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElemntsHomeComponent } from './elements-home/elemnts-home.component';

const routes: Routes = [
  {path: '', component: ElemntsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElmentsRoutingModule { }
