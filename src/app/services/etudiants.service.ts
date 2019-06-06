import { Injectable } from '@angular/core';
import { Etudiant } from '../modele/etudiant';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EtudiantsService {

	listeEtudiants: Array<Etudiant>;

	constructor(private http:HttpClient) {
		this.listeEtudiants = [];
		this.getEtudiants();
	}

	getEtudiants(){
		this.http.get<Array<Etudiant>>('/assets/data/etudiants.json').subscribe(
			data => {
				console.log(this, data);
				this.listeEtudiants = data;
			},
			erreur => console.log(erreur)
		);
	}
}

