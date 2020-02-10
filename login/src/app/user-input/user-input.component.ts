import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {Router} from "@angular/router"
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userModel=new User('','');

  constructor(private router: Router,private _ApiService : ApiService){};
  ngOnInit() {
  }

  onSubmit()
  {
      this._ApiService.login(this.userModel).subscribe(
      data =>{
        alert("Login Successfully");
        this.router.navigate(["/profile"]);
      },
      error =>{
        alert(error.error);
        if(error.error=="User does not exist."){
          this.router.navigate(["/signup"]);
        }
        this.userModel.email="";
        this.userModel.password="";
      }
    )
}  }
