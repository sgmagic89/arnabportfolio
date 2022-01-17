/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreLoaderService } from './pre-loader.service';

describe('Service: PreLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreLoaderService]
    });
  });

  it('should ...', inject([PreLoaderService], (service: PreLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
