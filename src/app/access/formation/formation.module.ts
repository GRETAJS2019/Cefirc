import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { VueGeneraleComponent } from './vue-generale.component';
import { ChoixFormationComponent } from './choix-formation/choix-formation.component';
import { SlideComponent } from './slide/slide.component';
import { EnchainnementComponent } from './enchainnement/enchainnement.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatComponent } from './resultat/resultat.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AjoutClassDirective } from 'src/app/ajout-class.directive';

@NgModule({
  declarations: [
  VueGeneraleComponent,
  ChoixFormationComponent,
  SlideComponent,
  EnchainnementComponent,
  QuizComponent,
  ResultatComponent,
  AjoutClassDirective
],
  imports: [
    CommonModule,
    FormationRoutingModule,
    DragDropModule,
  ]
})
export class FormationModule { }
