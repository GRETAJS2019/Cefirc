import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImagesComponent } from './text-images.component';

describe('TextImagesComponent', () => {
  let component: TextImagesComponent;
  let fixture: ComponentFixture<TextImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
