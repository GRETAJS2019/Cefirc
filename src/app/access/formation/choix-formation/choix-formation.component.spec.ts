import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixFormationComponent } from './choix-formation.component';

describe('ChoixFormationComponent', () => {
  let component: ChoixFormationComponent;
  let fixture: ComponentFixture<ChoixFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
