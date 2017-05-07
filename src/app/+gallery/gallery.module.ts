import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { GalleryRoutingModule } from './gallery.routing';
import { GalleryComponent } from './gallery/gallery.component';



// home module bootstrap
@NgModule({
  imports: [
    GalleryRoutingModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [GalleryComponent],
  providers: [],
})
export class GalleryModule { }
