import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDragListComponent } from './multi-drag-list.component';

describe('MultiDragListComponent', () => {
  let component: MultiDragListComponent;
  let fixture: ComponentFixture<MultiDragListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiDragListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiDragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
