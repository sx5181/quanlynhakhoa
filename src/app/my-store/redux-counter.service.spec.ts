import { TestBed } from '@angular/core/testing';

import { ReduxCounterService } from './redux-counter.service';

describe('ReduxCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReduxCounterService = TestBed.get(ReduxCounterService);
    expect(service).toBeTruthy();
  });
});
