import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "anna", cognome: "neri", isOnline: true},
    {nome: "gino", cognome: "marrone", isOnline: false},
    {nome: "vale", cognome: "capatonda", isOnline: false}
  ]
}
