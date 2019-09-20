import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseRadioComponent } from './reponse-radio.component';

describe('ReponseRadioComponent', () => {
  let component: ReponseRadioComponent;
  let fixture: ComponentFixture<ReponseRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
