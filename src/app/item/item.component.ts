import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() oneCandidat: Candidat;
  @Output() candToListe = new EventEmitter();

  sendToListe() {
    this.candToListe.emit(this.oneCandidat);
  }
}
