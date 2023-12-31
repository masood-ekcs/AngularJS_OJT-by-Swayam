import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndImagesComponent } from './text-and-images.component';

describe('TextAndImagesComponent', () => {
  let component: TextAndImagesComponent;
  let fixture: ComponentFixture<TextAndImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAndImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAndImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
