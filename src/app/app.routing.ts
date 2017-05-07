import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules  } from '@angular/router';

// all route and high level routes with lazy loading
// + denotes lazy loading for those modules
const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', loadChildren: './+home/home.module#HomeModule' },
 { path: 'features', loadChildren: './+features/features.module#FeaturesModule' },
 { path: 'gallery', loadChildren: './+gallery/gallery.module#GalleryModule' },
 { path: 'contact', loadChildren: './+contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
