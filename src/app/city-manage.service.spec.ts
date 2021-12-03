import { TestBed } from '@angular/core/testing';

import { CityManageService } from './city-manage.service';

describe('CityManageService', () => {
  let service: CityManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
