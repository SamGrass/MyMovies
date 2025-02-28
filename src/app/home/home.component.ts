import { Component } from '@angular/core';
import { MovieCardComponent } from "../component/movie-card/movie-card.component";
import { Movie } from '../model/movies';
import { SearchbarComponent } from "../component/searchbar/searchbar.component";

@Component({
  selector: 'app-home',
  imports: [MovieCardComponent, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  favMovies: Movie[] = JSON.parse(localStorage.getItem('favMovies') || '[]');

  // metodo per cercare i film preferiti
  searchFavMovies(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.favMovies = this.favMovies.filter(movie => movie.title.toLowerCase().includes(query));
    if (!query) {
      this.favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
    }
  }

  // metodo per rimuovere i film dai preferiti
  removeFavMoviesFromLocalStorage(movie: Movie): void {
    let favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
    favMovies = favMovies.filter((storedMovie: Movie) => storedMovie.id !== movie.id);
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
    this.favMovies = favMovies;
  }
}
