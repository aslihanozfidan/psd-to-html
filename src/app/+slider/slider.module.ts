import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider.routing';
import { AppModule } from './../app.module';

import { AppComponent } from '../app.component';
import { SliderComponent } from './slider.component';

// help module bootstrap
@NgModule({
  imports: [
    SliderRoutingModule,CommonModule
  ],
  exports: [],
  declarations: [SliderComponent,AppComponent],
  providers: [],
})
export class SliderModule { }
