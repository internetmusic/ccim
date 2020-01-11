import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcimComponent } from './ccim.component';

const routes: Routes = [
  {
    path: '',
    component: CcimComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CcimRoutingModule { }
