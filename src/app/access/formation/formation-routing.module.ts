import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VueGeneraleComponent } from './vue-generale.component';
import { SlideComponent } from './slide/slide.component';
import { ResultatComponent } from './resultat/resultat.component';
import { QuizComponent } from './quiz/quiz.component';
import { EnchainnementComponent } from './enchainnement/enchainnement.component';
import { ChoixFormationComponent } from './choix-formation/choix-formation.component';

const routes: Routes = [
  {
    path: '', component: VueGeneraleComponent,
    children: [
      { path: 'enchainements', component: EnchainnementComponent },
      { path: 'quiz', component: QuizComponent },
      { path: 'resultat', component: ResultatComponent },
      { path: 'slide', component: SlideComponent },
      { path: 'choix', component: ChoixFormationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
