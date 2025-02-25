import { Component } from '@angular/core';
import { MovieCardComponent } from "../component/movie-card/movie-card.component";
import { Movie } from '../model/movies';

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  favMovies: Movie[] = JSON.parse(localStorage.getItem('favMovies') || '[]');

  // metodo per rimuovere i film dai preferiti
  removeFavMoviesFromLocalStorage(movie: Movie): void {
    let favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
    favMovies = favMovies.filter((storedMovie: Movie) => storedMovie.id !== movie.id);
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
    this.favMovies = favMovies;
  }
}
