import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-accueil',
templateUrl: './accueil.component.html',
styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

title = 'Ma premier applications';
soustitre:string='Ceci est ma premier applications en angular'
img:string='/assets/orange.jpg';

constructor() { }

ngOnInit() {
}

}
