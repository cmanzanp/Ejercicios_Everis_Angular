import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: any[];
  global: any;
  spain: any[];
  title = 'covid';

  showAll: boolean;
  showGlobalSpain: boolean;

  constructor(private covidService: CovidService){
    this.showAll = true;
    this.showGlobalSpain = false;
  }

  seeAll():void{
    this.showAll = true;
    this.showGlobalSpain = false;
  }

  seeGlobalSpain():void{
    this.showAll = false;
    this.showGlobalSpain = true;
  }

  ngOnInit(): void {

    this.covidService.getAllCountriesInfo().subscribe(
      response=>{
        this.countries = response;
      }
    )

    this.covidService.getGlobalInfo().subscribe(
      response=>{
        this.global = response;
      }
    )

    this.covidService.getSpainInfo().subscribe(
      response=>{
        this.spain = response;
      }
    )

  }

}
