import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { FeaturesRoutingModule } from './features.routing';
import { FeaturesComponent } from './features/features.component';


// home module bootstrap
@NgModule({
  imports: [
    FeaturesRoutingModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [FeaturesComponent],
  providers: [],
})
export class FeaturesModule { }
