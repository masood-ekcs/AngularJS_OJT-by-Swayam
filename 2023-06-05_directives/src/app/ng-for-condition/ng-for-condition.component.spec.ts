import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForConditionComponent } from './ng-for-condition.component';

describe('NgForComponent', () => {
  let component: NgForConditionComponent;
  let fixture: ComponentFixture<NgForConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForConditionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgForConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
