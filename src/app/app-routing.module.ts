import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import {AccueilComponent}from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component'
import { EditionComponent } from './etudiants/edition/edition.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path: 'etudiants',component:EtudiantsComponent},
  {path:'edition', component:EditionComponent, canActivate:[AuthGuard]},
  {path:'edition/:index', component:EditionComponent, canActivate:[AuthGuard]},
  {path:'connexion',component:ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
