import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseCheckBoxComponent } from './reponse-check-box.component';

describe('ReponseCheckBoxComponent', () => {
  let component: ReponseCheckBoxComponent;
  let fixture: ComponentFixture<ReponseCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
