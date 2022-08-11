import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shared-data.service';

describe('SharedDataService', () => {
  let service: SharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the values', () => {
    const data = ['1', '2', '3', '4'];
    service.values = data;

    const response = service.getValue();
    expect(response).toBe(data);
  });

  
  it('should insert a new value', () => {
    const data = ['1', '2'];
    service.setValue(data);

    expect(service.values).toBe(data);
  });

  it('should clearValue', () => {
    service.clearValue();
    expect(service.values).toEqual([]);
  });
});
