import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  newUser!: User;

  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  adress = new FormControl('');

  onSubmit(){
    this.newUser = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      adress: this.adress.value
    }

  }
}
