import { TestBed } from '@angular/core/testing';

import { ContainerHoverEventService } from './container-hover-event.service';

describe('ContainerHoverEventService', () => {
  let service: ContainerHoverEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerHoverEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
