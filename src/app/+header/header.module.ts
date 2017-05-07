import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header.routing';

import { AppComponent } from '../app.component';
import { HeaderComponent } from './header.component';

// help module bootstrap
@NgModule({
  imports: [
    HeaderRoutingModule,CommonModule
  ],
  exports: [],
  declarations: [HeaderComponent,AppComponent],
  providers: [],
})
export class HeaderModule { }
