import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseTextComponent } from './reponse-text.component';

describe('ReponseTextComponent', () => {
  let component: ReponseTextComponent;
  let fixture: ComponentFixture<ReponseTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
