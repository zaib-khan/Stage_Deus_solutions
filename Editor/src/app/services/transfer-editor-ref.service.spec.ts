import { TestBed } from '@angular/core/testing';

import { TransferEditorRefService } from './transfer-editor-ref.service';

describe('TransferEditorRefService', () => {
  let service: TransferEditorRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferEditorRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
