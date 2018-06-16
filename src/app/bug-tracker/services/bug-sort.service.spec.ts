import { TestBed, inject } from '@angular/core/testing';

import { BugSortService } from './bug-sort.service';

describe('BugSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugSortService]
    });
  });

  it('should be created', inject([BugSortService], (service: BugSortService) => {
    expect(service).toBeTruthy();
  }));
});
