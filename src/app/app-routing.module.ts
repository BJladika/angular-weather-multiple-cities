import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCitiesWeatherComponent } from './dashboard-cities-weather/dashboard-cities-weather.component';
import { CityDetailForecastComponent } from './city-detail-forecast/city-detail-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: DashboardCitiesWeatherComponent },
  { path: 'detail/:id', component: CityDetailForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
