import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionRoutingModule } from './edition-routing.module';
import { EditionComponent } from './edition.component';
import { EnchainementsComponent } from './enchainements/enchainements.component';
import { ProfileComponent } from './profile/profile.component';
import { CreationComponent } from './quiz/creation/creation.component';
import { FormationComponent } from './formations/formation/formation.component';
import { ListeFormationComponent } from './formations/liste-formation/liste-formation.component';
import { ListeFormationPersoComponent } from './formations/liste-formation-perso/liste-formation-perso.component';
import { DragDropComponent } from './slides/drag-drop/drag-drop.component';
import { TitreComponent } from './slides/titre/titre.component';
import { TextImagesComponent } from './slides/text-images/text-images.component';
import { TextComponent } from './slides/text/text.component';



@NgModule({
  declarations: [
    EditionComponent,
    EnchainementsComponent,
    ProfileComponent,
    CreationComponent,
    FormationComponent,
    ListeFormationComponent,
    ListeFormationPersoComponent,
    DragDropComponent,
    TitreComponent,TextImagesComponent,TextComponent
  ],
  imports: [
    CommonModule,
    EditionRoutingModule
  ]
})
export class EditionModule { }
