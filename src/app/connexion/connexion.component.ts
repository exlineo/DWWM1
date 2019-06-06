import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  auth;

  constructor(public authServ: AuthService) { }

  ngOnInit() {
    this.auth = {
      id: '',
      mdp: ''
    }
  }
  submitAuth() {
    console.log(this.auth);
    this.authServ.ok = true;
  }
  init() {
    this.authServ.ok = false;
  }
}
