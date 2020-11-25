import { Component, OnInit, Input } from '@angular/core';
import { ServiceMovieService } from '../../services/service-movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() movies;

  show: boolean;

  imdbID: string;

  @Input() infoMovie;

  movieTitle: string;

  constructor(private movieService: ServiceMovieService) { }

  ngOnInit(): void {
    this.show = false;
  }

  submit(movieTitle): void{
    this.movieTitle = movieTitle;

    this.movieService.getMovieInfo(this.movieTitle).subscribe((response) => {
      this.movies = response;
    });

  }

  infoFicha(imdbID): void{
    this.imdbID = imdbID;

    this.movieService.getMovieInfoDetails(this.imdbID).subscribe((response) => {
      this.infoMovie = response;
      this.show = true;
    });

  }

}
