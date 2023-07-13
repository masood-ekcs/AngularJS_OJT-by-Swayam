import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsAllComponent } from './buttons-all.component';

describe('ButtonsAllComponent', () => {
  let component: ButtonsAllComponent;
  let fixture: ComponentFixture<ButtonsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
