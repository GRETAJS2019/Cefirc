import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditionComponent } from './edition.component';
import { EnchainementsComponent } from './enchainements/enchainements.component';
import { ProfileComponent } from './profile/profile.component';
import { CreationComponent } from './quiz/creation/creation.component';
import { FormationComponent } from './formations/formation/formation.component';
import { ListeFormationComponent } from './formations/liste-formation/liste-formation.component';
import { ListeFormationPersoComponent } from './formations/liste-formation-perso/liste-formation-perso.component';
import { DragDropComponent } from './slides/drag-drop/drag-drop.component';
import { TextComponent } from './slides/text/text.component';
import { TextImagesComponent } from './slides/text-images/text-images.component';
import { TitreComponent } from './slides/titre/titre.component';



const routes: Routes = [
  {path:'', component:EditionComponent,
  children:[
    {path:'enchainements', component:EnchainementsComponent},
    {path:'profile', component:ProfileComponent},
    {path:'creation', component:CreationComponent},
    // FORMATIONS
    {path:'formation', component:FormationComponent},
    {path:'listeformation', component:ListeFormationComponent},
    {path:'listeperso', component:ListeFormationPersoComponent},
    // SLIDES
    {path:'dragdrop', component:DragDropComponent},
    {path:'text', component:TextComponent},
    {path:'textimage', component:TextImagesComponent},
    {path:'titre', component:TitreComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionRoutingModule { }
