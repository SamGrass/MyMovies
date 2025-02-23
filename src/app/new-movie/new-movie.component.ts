import { Component, inject, OnInit } from '@angular/core';
import { ApiMovieResponse, Movie } from '../model/movies';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from '../component/movie-card/movie-card.component';

@Component({
  selector: 'app-new-movie',
  imports: [MovieCardComponent],
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
}
