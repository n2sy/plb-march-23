import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  constructor(private ActivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // console.log(this.ActivatedRoute.snapshot.params['id']);
    // console.log(this.ActivatedRoute.snapshot.paramMap.get('id'));

    this.ActivatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        console.log(p.get('id'));
      },
    });
  }
}
