import { Component, OnInit } from '@angular/core';
import {NewUser} from '../new-user'
import {Router} from "@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   userSignup=new NewUser('','','','','');
   
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
     
    if (this.userSignup.Password == this.userSignup.cPassword)
    { 
      this.router.navigate(["/userinput"]); 
    }else{      
      alert("SORRY BUT THE PASSWORD AND CONFIRM-PASSWORD DO NOT MATCH :(")

     }
      
   } 

}
 