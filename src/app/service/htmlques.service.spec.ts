import { TestBed } from '@angular/core/testing';

import { HtmlquesService } from './htmlques.service';

describe('HtmlquesService', () => {
  let service: HtmlquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
