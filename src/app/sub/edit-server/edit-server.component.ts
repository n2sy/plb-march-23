import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent {
  selectedServ;

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
  }
}
