import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() tabCandidats: Candidat[] = [];
  @Output() candToCV = new EventEmitter();

  constructor(private candSer: ListeCandidatsService) {}

  ngOnInit() {
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }

  sendToCv(cand) {
    this.candToCV.emit(cand);
  }
}
