import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragListComponent } from './drag-list.component';

describe('DragListComponent', () => {
  let component: DragListComponent;
  let fixture: ComponentFixture<DragListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
