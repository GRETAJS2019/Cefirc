import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { VueGeneraleComponent } from './vue-generale.component';
import { ChoixFormationComponent } from './choix-formation/choix-formation.component';
import { SlideComponent } from './slide/slide.component';
import { EnchainnementComponent } from './enchainnement/enchainnement.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatComponent } from './resultat/resultat.component';

@NgModule({
  declarations: [
  VueGeneraleComponent,
  ChoixFormationComponent,
  SlideComponent,
  EnchainnementComponent,
  QuizComponent,
  ResultatComponent],
  imports: [
    CommonModule,
    FormationRoutingModule
  ]
})
export class FormationModule { }
