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

  getCandidatById(id) {
    return this.tab.find((element) => element._id == id);
  }

  addCandidat(newCand) {
    newCand._id = Math.random().toLocaleString();
    this.tab.push(newCand);
  }

  deleteCandidat(cand) {
    let i = this.tab.indexOf(cand);
    this.tab.splice(i, 1);
  }

  updateCandidat(uCand) {
    let i = this.tab.indexOf(uCand);
    this.tab[i] = uCand;
  }
  constructor() {}
}
