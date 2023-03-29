import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  allCandidats: Candidat[] = [
    new Candidat('1', 'Bart', 'Simpson', 20, 'Ingénieur', 'bart.jpeg'),
    new Candidat('2', 'Homer', 'Simpson', 53, 'directeur', 'homer.jpg'),
    new Candidat('3', 'Marge', 'Simpson', 44, 'Chef de projet', 'marge.jpeg'),
  ];
  selectedCand: Candidat;

  recupSelectedCand(cand) {
    this.selectedCand = cand;
  }
}
