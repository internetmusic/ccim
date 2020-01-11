import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcimComponent } from './ccim.component';
import { CcimRoutingModule } from './ccim-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CcimRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CcimComponent
  ]
})
export class CcimModule { }
