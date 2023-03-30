import { Component } from '@angular/core';
import { ListeRecruesService } from '../services/liste-recrues.service';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrls: ['./recrues.component.css'],
})
export class RecruesComponent {
  constructor(public recSer: ListeRecruesService) {}
}
