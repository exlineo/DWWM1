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
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [EtudiantsService, EditionService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
