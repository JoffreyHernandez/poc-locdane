import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'itineraires', loadComponent: () => import('./pages/itineraires/itineraires').then((m) => m.Itineraires) },
  { path: 'le-troupeau', loadComponent: () => import('./pages/troupeau/troupeau').then((m) => m.Troupeau) },
  { path: 'hebergeurs', loadComponent: () => import('./pages/hebergeurs/hebergeurs').then((m) => m.Hebergeurs) },
  { path: 'tarifs', loadComponent: () => import('./pages/tarifs/tarifs').then((m) => m.Tarifs) },
  { path: 'qui-sommes-nous', loadComponent: () => import('./pages/qui-sommes-nous/qui-sommes-nous').then((m) => m.QuiSommesNous) },
  { path: 'handiane', loadComponent: () => import('./pages/handiane/handiane').then((m) => m.Handiane) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: '**', redirectTo: '' },
];
