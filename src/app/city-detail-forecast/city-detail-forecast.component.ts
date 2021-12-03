import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CityWeatherService } from '../city-weather.service';
import { City_Forecast } from '../city_forecast';
import { City_Weather } from '../city_weather';

@Component({
  selector: 'app-city-detail-forecast',
  templateUrl: './city-detail-forecast.component.html',
  styleUrls: ['./city-detail-forecast.component.scss'],
})
export class CityDetailForecastComponent implements OnInit {
  city: City_Weather | undefined;
  forecast: City_Forecast | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cityWeatherService: CityWeatherService
  ) {}

  ngOnInit(): void {
    this.getCityInfo();
    this.getCityForecast();
  }

  getCityInfo(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log(id);
    this.cityWeatherService.getCityById(id)
      .subscribe((new_city) => {
        this.city = new_city;
    });
  }

  getCityForecast(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.cityWeatherService.getForecastById(id)
      .subscribe(forecast => {
        this.forecast = forecast;
        for (var i=7; i<forecast.list.length;i=i+8){
          const x = forecast.list[i];
          this.forecast.list.push(x);
        }
        this.forecast.list.splice(0,this.forecast.list.length-5);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
