import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListeCandidatsService {
  private tab: Candidat[] = [
    new Candidat('1', 'Bart', 'Simpson', 20, 'Ingénieur', 'bart.jpeg'),
    new Candidat('2', 'Homer', 'Simpson', 53, 'directeur', 'homer.jpg'),
    new Candidat('3', 'Marge', 'Simpson', 44, 'Chef de projet', 'marge.jpeg'),
  ];

  getAllCandidats() {
    return this.tab;
  }

  addCandidat(newCand) {
    this.tab.push(newCand);
  }
  constructor() {}
}
