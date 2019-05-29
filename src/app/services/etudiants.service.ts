import { Injectable } from '@angular/core';
import { Etudiant } from '../modele/etudiant';
@Injectable({
	providedIn: 'root'
})
export class EtudiantsService {

	listeEtudiants: Array<Etudiant>;

	constructor() {
		this.listeEtudiants =
		[{
			id: 0,
			nom: 'aberkane',
			prenom: 'yanis',
			age: '19ans',
			email: 'yanis@hotmail.fr'
		},
		{
			id: 1,
			nom: 'Loheac',
			prenom: 'virgile',
			age: '27ans',
			email: 'virgile@hotmail.fr'
		},
		{
			id: 2,
			nom: 'Boulze',
			prenom: 'Christophe',
			age: '27ans',
			email: 'Christophe@hotmail.fr'
		}];

	}
}

