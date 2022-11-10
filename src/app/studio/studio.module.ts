import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioListComponent } from './studio-list/studio-list.component';

@NgModule({
  declarations: [
  
    StudioListComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
