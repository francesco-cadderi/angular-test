import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {
//utilizzato nel componente directive-structural-ngif
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "anna", cognome: "neri", isOnline: true},
    {nome: "gino", cognome: "marrone", isOnline: false},
    {nome: "vale", cognome: "capatonda", isOnline: false}
  ]

  constructor() { }

  getPersone(){
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index]
  }
}


