import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  editedCand;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListeCandidatsService
  ) {}

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.editedCand = this.candSer.getCandidatById(p.get('id'));
        console.log(this.editedCand);
      },
    });
  }

  onSubmit(candidatUpdated) {
    this.candSer.updateCandidat(candidatUpdated);
    this.router.navigateByUrl('/cv');
  }
}
