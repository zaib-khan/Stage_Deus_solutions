import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInContainerComponent } from './container-in-container.component';

describe('ContainerInContainerComponent', () => {
  let component: ContainerInContainerComponent;
  let fixture: ComponentFixture<ContainerInContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerInContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
