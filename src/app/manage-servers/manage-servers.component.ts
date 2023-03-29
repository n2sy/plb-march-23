import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  tabServers = [
    {
      nom: 'Server 1',
      type: 'small',
      date: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Server 2',
      type: 'large',
      date: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Server 3',
      type: 'small',
      date: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Server 4',
      type: 'medium',
      date: new Date(),
      statut: 'stable',
    },
  ];

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-warning': st == 'offline',
      'list-group-item-danger': st == 'critical',
    };
  }
}
