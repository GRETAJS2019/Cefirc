import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationPersoComponent } from './liste-formation-perso.component';

describe('ListeFormationPersoComponent', () => {
  let component: ListeFormationPersoComponent;
  let fixture: ComponentFixture<ListeFormationPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFormationPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormationPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
