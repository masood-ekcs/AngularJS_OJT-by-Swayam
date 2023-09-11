import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceFormComponent } from './template-reference-form.component';

describe('TemplateReferenceFormComponent', () => {
  let component: TemplateReferenceFormComponent;
  let fixture: ComponentFixture<TemplateReferenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
