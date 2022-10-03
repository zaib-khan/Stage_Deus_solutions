import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTwoBlocComponent } from './container-two-bloc.component';

describe('ContainerTwoBlocComponent', () => {
  let component: ContainerTwoBlocComponent;
  let fixture: ComponentFixture<ContainerTwoBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTwoBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerTwoBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
