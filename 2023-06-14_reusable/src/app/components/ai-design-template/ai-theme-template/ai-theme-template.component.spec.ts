import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiThemeTemplateComponent } from './ai-theme-template.component';

describe('AiThemeTemplateComponent', () => {
  let component: AiThemeTemplateComponent;
  let fixture: ComponentFixture<AiThemeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiThemeTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiThemeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
