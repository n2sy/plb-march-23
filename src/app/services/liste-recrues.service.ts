import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListeRecruesService {
  private tabRecrues: Candidat[] = [];
  constructor() {}

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrue(newRec) {
    if (this.tabRecrues.indexOf(newRec) == -1) this.tabRecrues.push(newRec);
    else alert('Ce candidat a déjà été recruté !');
  }
}
