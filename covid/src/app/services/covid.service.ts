import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  // Devuelve todos los resultados de los países
  getAllCountriesInfo(): Observable<any>{
    return this.http.get('https://api.covid19api.com/summary').pipe(map(res=>{
      return res["Countries"];
    }));
  }

  // Devuelve el resumen global de todos los países
  getGlobalInfo(): Observable<any>{
    return this.http.get('https://api.covid19api.com/summary').pipe(map(res=>{
      return res["Global"];
    }));
  }

  // Devuelve la información de España
  getSpainInfo(): Observable<any>{
    return this.http.get('https://api.covid19api.com/summary').pipe(map(res => {
      return res["Countries"].filter(country => {
        return country.Country === "Spain";
      });
    }));
  }

}
