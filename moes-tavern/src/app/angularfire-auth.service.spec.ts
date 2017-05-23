import { TestBed, inject } from '@angular/core/testing';

import { AngularfireAuthService } from './angularfire-auth.service';

describe('AngularfireAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularfireAuthService]
    });
  });

  it('should be created', inject([AngularfireAuthService], (service: AngularfireAuthService) => {
    expect(service).toBeTruthy();
  }));
});
