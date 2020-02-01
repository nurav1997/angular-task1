import { Component, OnInit } from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userModel=new User('varun@googl.com','Password@123');
  constructor() { }

  ngOnInit() {
  }

}
