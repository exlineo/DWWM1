import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EtudiantsService } from './services/etudiants.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './etudiants/edition/edition.component';
import { EditionService } from './services/edition.service';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    MenuComponent,
    PiedComponent,
    AccueilComponent,
    ConnexionComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [EtudiantsService, EditionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
