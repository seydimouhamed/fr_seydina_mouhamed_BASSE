/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromoResolverService } from './promo-resolver.service';

describe('Service: PromoResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromoResolverService]
    });
  });

  it('should ...', inject([PromoResolverService], (service: PromoResolverService) => {
    expect(service).toBeTruthy();
  }));
});
