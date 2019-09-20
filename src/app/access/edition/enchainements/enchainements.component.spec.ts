import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchainementsComponent } from './enchainements.component';

describe('EnchainementsComponent', () => {
  let component: EnchainementsComponent;
  let fixture: ComponentFixture<EnchainementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchainementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchainementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
