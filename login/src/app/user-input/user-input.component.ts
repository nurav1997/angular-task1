import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {Router} from "@angular/router"
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userModel=new User('','');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
   if (this.userModel.email === 'test@domain.com' && this.userModel.password === 'Password123!'){
      this.router.navigate(["/profile"]);  }
      else{
        alert("Invalid Username or Password");
        this.userModel.email="";
        this.userModel.password="";
      }
  }
}
