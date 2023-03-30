import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [FirstService],
})
export class CvComponent {
  allCandidats: Candidat[] = [];
  selectedCand: Candidat;

  constructor(
    private firstSer: FirstService,
    private lstCand: ListeCandidatsService
  ) {}

  ngOnInit() {
    this.firstSer.showInfos();
    this.allCandidats = this.lstCand.getAllCandidats();
  }

  recupSelectedCand(cand) {
    this.selectedCand = cand;
  }

  showList() {
    console.log(this.lstCand.getAllCandidats());
  }

  addCandidat() {
    this.lstCand.addCandidat(
      new Candidat('1', 'NEW', 'Candidat', 20, 'Ingénieur', 'bart.jpeg')
    );
  }
}
