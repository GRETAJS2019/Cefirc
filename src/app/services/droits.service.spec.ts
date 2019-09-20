import { TestBed } from '@angular/core/testing';

import { DroitsService } from './droits.service';

describe('DroitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroitsService = TestBed.get(DroitsService);
    expect(service).toBeTruthy();
  });
});
