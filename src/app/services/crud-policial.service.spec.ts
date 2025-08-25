import { TestBed } from '@angular/core/testing';

import { CrudPolicialService } from './crud-policial.service';

describe('CrudPolicialService', () => {
  let service: CrudPolicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPolicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
