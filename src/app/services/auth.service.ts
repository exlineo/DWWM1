import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Booléen pour suivre l'état de la connexion
  ok:boolean;
  
  constructor() {
    this.ok = false;
  }

  setOk(bool:boolean){
    this.ok = bool;
    sessionStorage.setItem('ok', this.ok.toString());
  }
  
  getOk(bool:boolean){
    if(sessionStorage.getItem('ok')){
      return eval(sessionStorage.getItem('ok'));
    }
    return false;
  }
}
