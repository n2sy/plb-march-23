import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private candSer: ListeCandidatsService, private router: Router) {}
  onSubmit(newCand) {
    console.log(newCand);
    this.candSer.addCandidat(newCand);
    this.router.navigateByUrl('/cv');
  }
}
