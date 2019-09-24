import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { EspacePersoComponent } from './espace-perso/espace-perso.component';
import { ListProfilComponent } from './list-profil/list-profil.component';

const routes: Routes = [
  {path:'', component: ListProfilComponent,
  children:[
    {path:'editProfil', component:EditProfilComponent},
    {path:'espacePerso', component:EspacePersoComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
