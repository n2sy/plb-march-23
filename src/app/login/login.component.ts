import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  specialites = ['', 'front-end', 'back-end', 'fullstack'];
  defaultSpecialite = 'front-end';
  myComment = 'RAS...';
  showError = false;

  constructor(private authSer: AuthService, private router: Router) {}

  submitHandler(f) {
    console.log(f.value);
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        localStorage.setItem('mytoken', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
  }
}
