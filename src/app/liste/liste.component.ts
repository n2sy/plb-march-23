import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() tabCandidats: Candidat[] = [];
  @Output() candToCV = new EventEmitter();

  sendToCv(cand) {
    this.candToCV.emit(cand);
  }
}
