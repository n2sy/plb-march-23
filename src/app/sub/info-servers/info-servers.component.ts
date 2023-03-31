import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-info-servers',
  templateUrl: './info-servers.component.html',
  styleUrls: ['./info-servers.component.css'],
})
export class InfoServersComponent {
  selectedServ;
  showBtn = false;

  constructor(
    private actRoute: ActivatedRoute,
    private servService: ListServersService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServ = this.servService.findServer(p.get('id'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.showBtn = q.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
