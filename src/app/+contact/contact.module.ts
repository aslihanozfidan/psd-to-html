import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ContactRoutingModule } from './contact.routing';
import { ContactComponent } from './contact/contact.component';



// home module bootstrap
@NgModule({
  imports: [
    ContactRoutingModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [ContactComponent],
  providers: [],
})
export class ContactModule { }
