import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormationRoutingModule } from './formation-routing.module';
import { VueGeneraleComponent } from './vue-generale.component';
import { ChoixFormationComponent } from './choix-formation/choix-formation.component';
import { SlideComponent } from './slide/slide.component';
import { EnchainnementComponent } from './enchainnement/enchainnement.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultatComponent } from './resultat/resultat.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AjoutClassDirective } from '../../ajout-class.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    MatCheckboxModule,
    MatButtonModule,
    FontAwesomeModule
  ]
})
export class FormationModule { }
