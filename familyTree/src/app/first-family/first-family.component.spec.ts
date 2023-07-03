import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstFamilyComponent } from './first-family.component';

describe('GrandFatherComponent', () => {
  let component: FirstFamilyComponent;
  let fixture: ComponentFixture<FirstFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstFamilyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FirstFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
