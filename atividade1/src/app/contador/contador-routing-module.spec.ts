import { TestBed } from '@angular/core/testing';

import { ContadorRoutingModule } from './contador-routing-module';

describe('ContadorRoutingModule', () => {
  let service: ContadorRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorRoutingModule);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
