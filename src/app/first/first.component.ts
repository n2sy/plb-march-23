import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  prenom: string = 'Alexis';
  cabinet: string = 'PLB';
  color = 'pink';
  hd = true;

  afficherAlert() {
    alert("J'ai été cliqué !");
  }

  toggleDiv() {
    this.hd = !this.hd;
  }

  RecupererMessage(msg) {
    this.prenom = msg;
  }
}
