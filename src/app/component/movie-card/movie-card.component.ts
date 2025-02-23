import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movies';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {

  // ricevo l'array di film da visualizzare da new-movie.component.ts
  @Input() allMovies: Movie[] | null = null;
}
