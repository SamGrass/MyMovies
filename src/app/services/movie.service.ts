import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMovieResponse, Movie } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // variabili API
  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private apiKey = '2e8c51d61cce09979ab13516d65193ba';

  constructor(private http: HttpClient) {}


  getMovies(): Observable<ApiMovieResponse> {
    return this.http.get<ApiMovieResponse>(`${this.apiUrl}?api_key=${this.apiKey}&language=it-IT&page=1`);
  }

}
