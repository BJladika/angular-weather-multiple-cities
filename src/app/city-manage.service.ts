import { Injectable } from '@angular/core';
import { City_Weather } from './city_weather';

@Injectable({
  providedIn: 'root'
})
export class CityManageService {

  cities: City_Weather[] = [];

  addCity(city: City_Weather){
    this.cities.push(city);
  }

  getCities(){
    return this.cities;
  }

  deleteCity(city: City_Weather){
    this.cities.splice(this.cities.indexOf(city), 1)
  }

  constructor() { }
}
