import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServersService {
  tabServers = [
    {
      id: 1,
      nom: 'Alexis Server',
      type: 'offline',
    },
    {
      id: 2,
      nom: 'Clément Server',
      type: 'online',
    },
    {
      id: 3,
      nom: 'Cedric Server',
      type: 'offline',
    },
  ];

  constructor() {}
}
