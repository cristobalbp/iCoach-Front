import { TestBed } from '@angular/core/testing';

import { Test3Service } from './test3.service';

describe('Test3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test3Service = TestBed.get(Test3Service);
    expect(service).toBeTruthy();
  });
});
