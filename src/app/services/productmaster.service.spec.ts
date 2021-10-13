import { TestBed } from '@angular/core/testing';

import { ProductmasterService } from './productmaster.service';

describe('ProductmasterService', () => {
  let service: ProductmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
