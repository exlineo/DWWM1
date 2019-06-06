import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/modele/etudiant';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  index:number = 0;
  etudiant:Etudiant;

  constructor(public etuService:EtudiantsService, private aroute:ActivatedRoute) {}
  
  ngOnInit() {
    // On récupère l'identifiant envoyé dans l'adresse par routerLink
    this.aroute.params.subscribe(params => {
      console.log(params);
      this.index = params.index;
      this.etudiant = this.etuService.listeEtudiants[this.index];
    })
  }
  // Permet de valider les changements dans un étudiants
  valideEtudiant(){
    this.etuService.listeEtudiants[this.index] = this.etudiant;
  }

}
