import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListeCandidatsService {
  private tab: Candidat[] = [
    new Candidat('1', 'Bart', 'Simpson', 20, 'Ingénieur', 'bart.jpeg'),
    new Candidat('2', 'Homer', 'Simpson', 53, 'directeur', 'homer.jpg'),
    new Candidat('3', 'Marge', 'Simpson', 44, 'Chef de projet', 'marge.jpeg'),
  ];
  link = 'http://localhost:3000/cv/persons';

  getAllCandidats() {
    return this.tab;
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  getCandidatById(id) {
    return this.tab.find((element) => element._id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addCandidat(newCand) {
    newCand._id = Math.random().toLocaleString();
    this.tab.push(newCand);
  }

  addCandidatAPI(newCand) {
    return this.http.post(this.link, newCand);
  }

  deleteCandidat(cand) {
    let i = this.tab.indexOf(cand);
    this.tab.splice(i, 1);
  }

  deleteCandidatAPI(cand) {
    return this.http.delete(`${this.link}/${cand._id}`);
  }

  updateCandidat(uCand) {
    let i = this.tab.indexOf(uCand);
    this.tab[i] = uCand;
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }
  constructor(private http: HttpClient) {}
}
