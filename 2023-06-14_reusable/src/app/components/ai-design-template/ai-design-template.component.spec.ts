import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDesignTemplateComponent } from './ai-design-template.component';

describe('AiDesignTemplateComponent', () => {
  let component: AiDesignTemplateComponent;
  let fixture: ComponentFixture<AiDesignTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiDesignTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDesignTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
