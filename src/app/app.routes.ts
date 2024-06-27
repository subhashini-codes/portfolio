import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./components/about/about.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component'),
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component'),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component'),
  },
];
