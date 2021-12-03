import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCitiesWeatherComponent } from './dashboard-cities-weather.component';

describe('DashboardCitiesWeatherComponent', () => {
  let component: DashboardCitiesWeatherComponent;
  let fixture: ComponentFixture<DashboardCitiesWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCitiesWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCitiesWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
