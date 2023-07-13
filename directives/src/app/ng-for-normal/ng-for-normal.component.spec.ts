import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForNormalComponent } from './ng-for-normal.component';

describe('NgForNormalComponent', () => {
  let component: NgForNormalComponent;
  let fixture: ComponentFixture<NgForNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
