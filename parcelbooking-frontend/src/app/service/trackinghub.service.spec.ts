import { TestBed } from '@angular/core/testing';

import { TrackinghubService } from './trackinghub.service';

describe('TrackinghubService', () => {
  let service: TrackinghubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackinghubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
