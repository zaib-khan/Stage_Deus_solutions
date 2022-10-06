import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableIconsComponent } from './draggable-icons.component';

describe('DraggableIconsComponent', () => {
  let component: DraggableIconsComponent;
  let fixture: ComponentFixture<DraggableIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
