import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

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
    path: 'dettagli-film/:id',
    component: MovieDetailsComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];
