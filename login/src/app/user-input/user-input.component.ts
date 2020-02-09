import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  userModel=new User('','');

  //constructor(private router: Router) { }
  constructor(private http: HttpClient){};
  ngOnInit() {
  }

  // onSubmit(){
  //  if (this.userModel.email === 'test@domain.com' && this.userModel.password === 'Password123!'){
  //     this.router.navigate(["/profile"]);  }
  //     else{
  //       alert("Invalid Username or Password");
  //       this.userModel.email="";
  //       this.userModel.password="";
  //     }
  // }

  onSubmit()
  {
    this.http.post("https://nalo-test.herokuapp.com/v1/login" ,{
      "email":this.userModel.email,
      "password":this.userModel.password

    })
    .subscribe
    (
      data =>{
        alert("POST REQUEST SENT SUCCESSFULLY");
        console.log(data);
      },
      error =>{
        alert("ERROR HAS OCCURED");
        console.log(error);
      }
      
    )
}}
