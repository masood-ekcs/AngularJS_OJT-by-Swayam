import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianComponent } from './italian.component';

describe('ItalianComponent', () => {
  let component: ItalianComponent;
  let fixture: ComponentFixture<ItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItalianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
