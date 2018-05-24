
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';
import { ImageComponent } from './gallery/image-list/image.component';
import { ImageDetailComponent } from './gallery/image-detail/image-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes =[
  { path: '',redirectTo:'/gallery',pathMatch: 'full'},
  { path: 'gallery',component: GalleryComponent},
  { path: 'contact',component: ContactComponent},
  { path: 'about', component: AboutComponent}
];


export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);