import { TestBed } from '@angular/core/testing';

import { Add2BlocContainerService } from './add2-bloc-container.service';

describe('Add2BlocContainerService', () => {
  let service: Add2BlocContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Add2BlocContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
