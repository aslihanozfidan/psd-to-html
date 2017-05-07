import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

const routes: Routes = [  
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', loadChildren: './+home/home.module#HomeModule' },
 { path: 'features', loadChildren: './+features/features.module#FeaturesModule' },
 { path: 'gallery', loadChildren: './+gallery/gallery.module#GalleryModule' },
 { path: 'contact', loadChildren: './+contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule { }