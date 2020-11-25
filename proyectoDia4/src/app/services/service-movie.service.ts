import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceMovieService {

  url: string;

  constructor(private http: HttpClient) {}

  getMovieInfo(title): Observable<any> {
    this.url = "http://www.omdbapi.com/?s=" + title + "&apikey=" + environment.apiKey;
    return this.http.get(this.url).pipe(
      map((res) => {
        return res['Search']
      })
    );
  }

  getMovieInfoDetails(imdbID): Observable<any> {
    this.url = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=" + environment.apiKey;
    return this.http.get(this.url);
  }

}
