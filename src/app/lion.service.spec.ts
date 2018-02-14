import { TestBed, inject } from '@angular/core/testing';

import { LionService } from './lion.service';

describe('LionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LionService]
    });
  });

  it('should be created', inject([LionService], (service: LionService) => {
    expect(service).toBeTruthy();
  }));
});
