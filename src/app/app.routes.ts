import { Routes } from '@angular/router';
import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  PageNotFoundComponent,
} from './components';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
