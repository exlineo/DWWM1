import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [UtilisateursComponent, AccueilComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
