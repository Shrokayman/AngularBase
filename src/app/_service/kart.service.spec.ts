import { TestBed } from '@angular/core/testing';

import { KartService } from './kart.service';

describe('KartService', () => {
  let service: KartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
