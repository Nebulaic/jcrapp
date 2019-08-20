import { TestBed } from '@angular/core/testing';

import { JcrService } from './jcr.service';

describe('JcrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JcrService = TestBed.get(JcrService);
    expect(service).toBeTruthy();
  });
});
