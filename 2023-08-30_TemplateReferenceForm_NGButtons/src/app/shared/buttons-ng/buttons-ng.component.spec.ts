import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsNGComponent } from './buttons-ng.component';

describe('ButtonsNGComponent', () => {
  let component: ButtonsNGComponent;
  let fixture: ComponentFixture<ButtonsNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsNGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
