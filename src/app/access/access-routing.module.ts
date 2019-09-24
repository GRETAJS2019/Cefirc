import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access.component';

const routes: Routes = [
  {
    path: '', component: AccessComponent},
    { path: 'edition', loadChildren: './edition/edition.module#EditionModule' },
    { path: 'formation', loadChildren: './formation/formation.module#FormationModule' },
    { path: 'admin', loadChildren:'./admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
