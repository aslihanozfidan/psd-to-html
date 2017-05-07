import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home/home.component';


import { FeaturesComponent } from '../+features/features/features.component';
import { GalleryComponent } from '../+gallery/gallery/gallery.component';
import { ContactComponent } from '../+contact/contact/contact.component';

// home module bootstrap
@NgModule({
  imports: [
    HomeRoutingModule,
    MaterialModule.forRoot(),
    CommonModule
  ],
  exports: [],
  declarations: [HomeComponent,FeaturesComponent,GalleryComponent,ContactComponent],
  providers: [],
})
export class HomeModule { }
