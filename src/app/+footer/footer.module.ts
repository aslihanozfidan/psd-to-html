import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer.routing';

import { AppComponent } from '../app.component';
import { FooterComponent } from './footer.component';

// help module bootstrap
@NgModule({
  imports: [
    FooterRoutingModule,CommonModule
  ],
  exports: [],
  declarations: [FooterComponent,AppComponent],
  providers: [],
})
export class FooterModule { }
