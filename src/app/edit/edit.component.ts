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
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.editedCand = response;
          },
          error: (err) => {
            console.log('Erreur avec getById');
          },
        });
      },
    });
  }

  onSubmit(candidatUpdated) {
    this.candSer.updateCandidatAPI(this.editedCand).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Erreur avec update');
      },
    });
  }
}
