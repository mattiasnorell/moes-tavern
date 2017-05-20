import { TestBed, inject } from '@angular/core/testing';

import { CellarListService } from './cellar-list.service';

describe('CellarListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellarListService]
    });
  });

  it('should be created', inject([CellarListService], (service: CellarListService) => {
    expect(service).toBeTruthy();
  }));

  it('should have more than zero items', inject([CellarListService], (service: CellarListService) => {
    expect(service.getAll().length).toBeGreaterThan(0);
  }));
});
