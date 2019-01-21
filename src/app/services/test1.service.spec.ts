import { TestBed } from '@angular/core/testing';

import { Test1Service } from './test1.service';

describe('Test1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test1Service = TestBed.get(Test1Service);
    expect(service).toBeTruthy();
  });
});
