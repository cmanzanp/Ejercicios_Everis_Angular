import { Component } from '@angular/core';
import { ServiceMovieService } from './services/service-movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyectoDia4';

  movies: any[];

  constructor(private movieService: ServiceMovieService){
    
  }

  ngOnInit(): void {
    
  }

}
