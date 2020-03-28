/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReduxRoleService } from './redux-role.service';

describe('Service: ReduxRole', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReduxRoleService]
    });
  });

  it('should ...', inject([ReduxRoleService], (service: ReduxRoleService) => {
    expect(service).toBeTruthy();
  }));
});
