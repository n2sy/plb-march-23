import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent {
  signupForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux terminé !');
      },
    });

    this.signupForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // infos : new FormGroup({
      //   prenom : new FormControl(),
      //   nom : new FormControl()
      // })
      skills: new FormArray([]),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }

  get FormsSkills() {
    return <FormArray>this.signupForm.get('skills');
  }

  addSkill() {
    const ctrl = new FormControl(null, Validators.required);
    this.FormsSkills.push(ctrl);
  }
  // getFormsSkills() {
  //   return <FormArray>this.signupForm.get('skills');
  // }

  // addSkill() {
  //   const ctrl = new FormControl(null, Validators.required);
  //   this.getFormsSkills().push(ctrl);
  // }
}
