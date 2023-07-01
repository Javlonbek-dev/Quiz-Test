import { TestBed } from '@angular/core/testing';

import { TsquesService } from './tsques.service';

describe('TsquesService', () => {
  let service: TsquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
