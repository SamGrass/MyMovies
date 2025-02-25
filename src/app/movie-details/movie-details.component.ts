import { Component } from '@angular/core';
import { Movie } from '../model/movies';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  movie: Movie | null = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  // carico il film selezionato per id
  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movie = this.movieService.getMovieFromLocalStorage(movieId);
    }
  }

}
