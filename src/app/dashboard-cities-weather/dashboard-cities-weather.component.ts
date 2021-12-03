import { Component, OnInit } from '@angular/core';
import { CityManageService } from '../city-manage.service';
import { CityWeatherService } from '../city-weather.service';
import { City_Weather } from '../city_weather';

@Component({
  selector: 'app-dashboard-cities-weather',
  templateUrl: './dashboard-cities-weather.component.html',
  styleUrls: ['./dashboard-cities-weather.component.scss'],
})
export class DashboardCitiesWeatherComponent implements OnInit {
  cities = this.cityManageService.getCities();
  city: City_Weather | undefined;

  constructor(
    private cityManageService: CityManageService,
    private cityWeatherService: CityWeatherService
  ) {}

  ngOnInit(): void {
    //Init Methods on Start
  }

  add(name: string): void {
    if (name.length == 0) {
      alert('Введите название города!');
    } else {
      //Технически можно обмануть, введя название города на английском
      if (this.cities.filter((cities) => cities.name === name).length == 0)
        this.cityWeatherService.getCityByName(name).subscribe((new_city) => {
          if (new_city == undefined) alert('Извините, город не найден.');
          else this.cityManageService.addCity(new_city);
        });
      else alert('Данный город уже у вас в списке.');
    }
  }

  update(city: City_Weather): void {
    this.cityWeatherService.getCityById(city.id).subscribe((updated_city) => {
      this.cities.splice(this.cities.indexOf(city), 1, updated_city);
    });
  }

  delete(city: City_Weather): void {
    this.cityManageService.deleteCity(city);
  }
}
