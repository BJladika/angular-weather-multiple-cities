import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailForecastComponent } from './city-detail-forecast.component';

describe('CityDetailForecastComponent', () => {
  let component: CityDetailForecastComponent;
  let fixture: ComponentFixture<CityDetailForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityDetailForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
