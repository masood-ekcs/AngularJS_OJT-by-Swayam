import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiquesComponent } from './antiques.component';

describe('AntiquesComponent', () => {
  let component: AntiquesComponent;
  let fixture: ComponentFixture<AntiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
