import { Component } from '@angular/core';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrls: ['./home-servers.component.css'],
})
export class HomeServersComponent {
  listServ = [];
  constructor(private serService: ListServersService) {}

  ngOnInit() {
    this.listServ = this.serService.tabServers;
    console.log(this.listServ);
  }
}
