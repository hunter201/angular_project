import { Injectable } from '@angular/core';
import { Auto } from '../auto/auto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  getCars(): Auto[] {
     return [
       new Auto("Tesla Model S",4,125200),
       new Auto("Renault Duster",6,245200),
       new Auto("Chevrolet Cruze",1,15230),
       new Auto("Kia Optima",0,5200),
       new Auto("Lada Granta",3,166200),
     ]
  }

  constructor(private http:HttpClient) { }

  count = [
    {
      name:  "Jupiter",
      rank: 1,
    },
    {
      name:  "Pluto",
      rank:  3,
    },
    {
      name:  "Neptune",
      rank:  2,
    },
    {
      name:  "Uranus",
      rank:  0,
    },
    {
      name:  "Venus",
      rank:  6,
    },
  ];

  getData() {
    return this.http.get('https://metoyou.com/pages/bears');
  }
}
