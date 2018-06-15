import { TestBed, inject } from '@angular/core/testing';

import { BugOperationsService } from './bug-operations.service';

describe('BugOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugOperationsService]
    });
  });

  it('should be created', inject([BugOperationsService], (service: BugOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
