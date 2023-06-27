import { TestBed } from '@angular/core/testing';

import { CssquesService } from './cssques.service';

describe('CssquesService', () => {
  let service: CssquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
