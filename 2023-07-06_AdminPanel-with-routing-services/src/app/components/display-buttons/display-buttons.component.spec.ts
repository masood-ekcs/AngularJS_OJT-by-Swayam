import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayButtonsComponent } from './display-buttons.component';

describe('DisplayButtonsComponent', () => {
  let component: DisplayButtonsComponent;
  let fixture: ComponentFixture<DisplayButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
