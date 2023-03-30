import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Candidat } from '../models/candidat';
import { ListeCandidatsService } from '../services/liste-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  cand: Candidat;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private candSer: ListeCandidatsService
  ) {}

  ngOnInit() {
    // console.log(this.ActivatedRoute.snapshot.params['id']);
    // console.log(this.ActivatedRoute.snapshot.paramMap.get('id'));

    this.ActivatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));

        this.cand = this.candSer.getCandidatById(p.get('id'));
        console.log(this.cand);
      },
    });
  }
}
