import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aggiungi-film',
    component: NewMovieComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];
