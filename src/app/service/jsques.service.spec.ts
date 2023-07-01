import { TestBed } from '@angular/core/testing';

import { JsquesService } from './jsques.service';

describe('JsquesService', () => {
  let service: JsquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
