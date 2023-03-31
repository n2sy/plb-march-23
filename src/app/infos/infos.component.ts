import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  cand;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private candSer: ListeCandidatsService
  ) {}

  ngOnInit() {
    // console.log(this.ActivatedRoute.snapshot.params['id']);
    // console.log(this.ActivatedRoute.snapshot.paramMap.get('id'));

    this.ActivatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));

        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.cand = response;
          },
          error: (err) => {
            console.log('Erreur avec getById');
          },
        });
      },
      error: (err) => {
        console.log('Erreur avec ParamMap');
      },
    });
  }

  onDelete() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.cand).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log('Erreur avec Delete');
        },
      });
    }
  }
}
