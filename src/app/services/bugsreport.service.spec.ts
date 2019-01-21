import { TestBed } from '@angular/core/testing';

import { BugsreportService } from './bugsreport.service';

describe('BugsreportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugsreportService = TestBed.get(BugsreportService);
    expect(service).toBeTruthy();
  });
});
