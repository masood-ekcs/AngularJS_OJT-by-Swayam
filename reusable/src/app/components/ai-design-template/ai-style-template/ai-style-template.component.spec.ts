import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiStyleTemplateComponent } from './ai-style-template.component';

describe('AiStyleTemplateComponent', () => {
  let component: AiStyleTemplateComponent;
  let fixture: ComponentFixture<AiStyleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiStyleTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiStyleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
