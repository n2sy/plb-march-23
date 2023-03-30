import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  selectedStatut = '';
  tabServers = [
    {
      nom: 'Test Development Server',
      type: 'small',
      date: new Date(),
      statut: 'critical',
    },
    {
      nom: 'Unit testing Server',
      type: 'large',
      date: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Deployment test Server',
      type: 'small',
      date: new Date(),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
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
