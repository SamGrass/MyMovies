import { Component, inject, OnInit } from '@angular/core';
import { ApiMovieResponse, Movie } from '../model/movies';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from '../component/movie-card/movie-card.component';
import { SearchbarComponent } from '../component/searchbar/searchbar.component';

@Component({
  selector: 'app-new-movie',
  imports: [MovieCardComponent, SearchbarComponent],
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.scss'
})
export class NewMovieComponent implements OnInit{
  // dichiaro l'array di film che verrà popolato con la risposta dell'API
  allMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  // faccio la chiamata all'API all'avvio del componente
  ngOnInit() {
    this.movieService.getMovies().subscribe((response: ApiMovieResponse )=> {
      this.allMovies = response.results;
    });
  }

  // ricevo il valore dell'input dalla searchbar
  searchMovieInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchMovie = inputElement.value;
    if (searchMovie === '') {
      this.movieService.getMovies().subscribe((response: ApiMovieResponse )=> {
        this.allMovies = response.results;
      });
    } else{
      this.searchMovies(searchMovie);
    }
  }

  // faccio la chiamata all'API per cercare i film filtrati
  searchMovies(movieName: string): void {
    this.movieService.getMoviesByNames(movieName).subscribe((response: ApiMovieResponse) => {
      this.allMovies = response.results;
    });
  }

  // metodo per aggiungere i film ai preferiti
  addFavMoviesToLocalStorage(movie: Movie): void {
    const favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
    favMovies.push(movie);
    localStorage.setItem('favMovies', JSON.stringify(favMovies));

  }

  // metodo per rimuovere i film dai preferiti
  removeFavMoviesFromLocalStorage(movie: Movie): void {
    let favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
    favMovies = favMovies.filter((storedMovie: Movie) => storedMovie.id !== movie.id);
    localStorage.setItem('favMovies', JSON.stringify(favMovies));
  }
}
