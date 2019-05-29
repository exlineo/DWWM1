import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import {AccueilComponent}from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component'
import { EditionComponent } from './etudiants/edition/edition.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path: 'etudiants',component:EtudiantsComponent},
  {path:'edition', component:EditionComponent},
  {path:'edition/:index', component:EditionComponent},
  {path:'connexion',component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
