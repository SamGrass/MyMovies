import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../model/movies';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  // ricevo l'array di film da visualizzare da new-movie.component.ts
  @Input() Movies: Movie[] | null = null;

  // emetto l'evento per aggiungere o rimuovere i film dai preferiti
  @Output() movieSelected = new EventEmitter<Movie>();
  @Output() movieRemoved = new EventEmitter<Movie>();

  // controllo se il film è già nei preferiti
  isMovieInLocalStorage(movieId: number): boolean {
    const favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
    return favMovies.some((storedMovie: Movie) => storedMovie.id === movieId);
  }

  // metodo per aggiungere o rimuovere i film dai preferiti
  selectMovie(movie: Movie): void {
    if (this.isMovieInLocalStorage(movie.id)) {
      this.movieRemoved.emit(movie);
    } else {
      this.movieSelected.emit(movie);
    }
  }
}
