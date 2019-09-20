import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EspacePersoComponent } from './espace-perso/espace-perso.component';

@NgModule({
  declarations: [
  AdminComponent,
  ListProfilComponent,
  EditProfilComponent,
  EspacePersoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
