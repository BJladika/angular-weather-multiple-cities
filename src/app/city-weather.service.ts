import { Injectable } from '@angular/core';
import { City_Weather } from './city_weather';
import { City_Forecast } from './city_forecast';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {

  private weatherUrl = 'https://api.openweathermap.org/data/2.5/';
  private api = '4ead6ad7444e30854bfb5513485cd259';
  private api_advanced = '0f3fb9fa31ad3d41f1bb2bd0841c3f2f'; //Чужой API openweather, найден в просторах интернета. Имеет доступ к прогнозу на 16 дней.

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCityByName(name: string): Observable<City_Weather> {
    const url = this.weatherUrl + 'weather?q=' + name + '&units=metric&lang=ru' + '&appid=' + this.api;

    return this.http.get<City_Weather>(url).pipe(      
      tap(_ => console.log(`fetched city name=${name}`)),
      catchError(this.handleError<City_Weather>(`getCityByName name=${name}`))
    );
  }

  getCityById(id: number): Observable<City_Weather> {
    const url = this.weatherUrl + 'weather?id=' + id + '&units=metric&lang=ru' + '&appid=' + this.api;

    return this.http.get<City_Weather>(url).pipe(      
      tap(_ => console.log(`fetched city id=${id}`)),
      catchError(this.handleError<City_Weather>(`getCityById id=${id}`))
    );
  }

  getForecastById(id: number): Observable<City_Forecast>{
    const url = this.weatherUrl + 'forecast?id=' + id + '&units=metric&lang=ru' + '&appid=' + this.api;

    return this.http.get<City_Forecast>(url).pipe(      
      tap(_ => console.log(`fetched city forecast=${id}`)),
      catchError(this.handleError<City_Forecast>(`getForecastById name=${id}`))
    );
  }

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("Error:"+error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
