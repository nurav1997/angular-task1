import { Component, OnInit } from '@angular/core';
import {NewUser} from '../new-user'
import {Router} from "@angular/router"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   userSignup=new NewUser('','','','','');
   
  //constructor(private router: Router) { }
  constructor(private http: HttpClient){};

  ngOnInit() {
  }

  // onSubmit(){
     
  //   if (this.userSignup.Password == this.userSignup.cPassword)
  //   { 
  //     this.router.navigate(["/userinput"]); 
  //   }else{      
  //     alert("SORRY BUT THE PASSWORD AND CONFIRM-PASSWORD DO NOT MATCH :(")

  //    }
      
  //  } 

   onSubmit()
  {
    if (this.userSignup.Password == this.userSignup.cPassword)
    { 
    this.http.post("https://nalo-test.herokuapp.com/v1/signup" ,
    {
      "email":this.userSignup.email,
      "password":this.userSignup.Password,
      "name":this.userSignup.userName,
      "role":this.userSignup.role
    })

    .subscribe
    (
      data =>{
        alert("POST REQUEST SENT SUCCESSFULLY");
        console.log(data);
      },
      error =>{
        alert("ERROR HAS OCCURED");
        error.log(error);
      }
      
    )
  }
else{ 
   alert("SORRY PASSWORD AND CONFIRM PASSWORD DO NOT MATCH");
 }

  }
}
 