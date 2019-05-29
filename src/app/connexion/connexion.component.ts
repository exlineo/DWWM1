import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
auth;
  constructor() { }

  ngOnInit() {
  	this.auth = {
  		id:'',
  		mdp:''
  	}
  }
submitAuth(){
	console.log(this.auth)
}
}
