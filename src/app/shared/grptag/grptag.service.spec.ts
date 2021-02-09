import { TestBed } from '@angular/core/testing';

import { GrptagService } from './grptag.service';

describe('GrptagService', () => {
  let service: GrptagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrptagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
