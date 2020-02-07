import { Component, OnInit } from '@angular/core';
import {NewUser} from '../new-user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   userSignup=new NewUser('','','','','');
   
  constructor() { }

  ngOnInit() {
  }

}
 