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
  movies: Movie[] = [];
}
