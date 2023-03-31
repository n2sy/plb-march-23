import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  specialites = ['', 'front-end', 'back-end', 'fullstack'];
  defaultSpecialite = 'front-end';
  myComment = 'RAS...';
  submitHandler(f) {
    console.log(f.value);
  }
}
