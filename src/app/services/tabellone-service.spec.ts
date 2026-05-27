import { TestBed } from '@angular/core/testing';

import { TabelloneService } from './tabellone-service';

describe('TabelloneService', () => {
  let service: TabelloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
