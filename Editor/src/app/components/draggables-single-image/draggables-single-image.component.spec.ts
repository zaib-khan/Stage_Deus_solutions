import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggablesSingleImageComponent } from './draggables-single-image.component';

describe('DraggablesSingleImageComponent', () => {
  let component: DraggablesSingleImageComponent;
  let fixture: ComponentFixture<DraggablesSingleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggablesSingleImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggablesSingleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
