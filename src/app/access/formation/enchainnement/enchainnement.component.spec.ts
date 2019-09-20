import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchainnementComponent } from './enchainnement.component';

describe('EnchainnementComponent', () => {
  let component: EnchainnementComponent;
  let fixture: ComponentFixture<EnchainnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchainnementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchainnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
