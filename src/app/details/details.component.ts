import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListeRecruesService } from '../services/liste-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;

  constructor(private RecSer: ListeRecruesService) {}

  addNewRecrue() {
    this.RecSer.addRecrue(this.selCandidat);
  }
}
