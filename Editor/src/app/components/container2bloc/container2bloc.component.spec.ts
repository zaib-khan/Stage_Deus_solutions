import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container2blocComponent } from './container2bloc.component';

describe('Container2blocComponent', () => {
  let component: Container2blocComponent;
  let fixture: ComponentFixture<Container2blocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Container2blocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Container2blocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
