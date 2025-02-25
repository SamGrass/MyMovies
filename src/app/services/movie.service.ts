import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMovieResponse, Movie } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // variabili API
  private apiMovieList = 'https://api.themoviedb.org/3/discover/movie';
  private apiKey = '2e8c51d61cce09979ab13516d65193ba';
  private apiMovieSearch = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {}

  // metodo per ottenere i film dall'API
  getMovies(): Observable<ApiMovieResponse> {
    return this.http.get<ApiMovieResponse>(`${this.apiMovieList}?api_key=${this.apiKey}&language=it-IT&page=1`);
  }

  // metodo per ottenere i film filtrati dall'API
  getMoviesByNames(movieName: string): Observable<ApiMovieResponse> {
    return this.http.get<ApiMovieResponse>(`${this.apiMovieSearch}?api_key=${this.apiKey}&language=it-IT&query=${movieName}&page=1`);
  }

  // metodo per ottenere un film dal localStorage
  getMovieFromLocalStorage(movieId: string): Movie | null {
      const favMovies = JSON.parse(localStorage.getItem('favMovies') || '[]');
      return favMovies.find((movie: Movie) => movie.id === +movieId) || null;
    }
}
