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
     
    if (this.userSignup.email === 'test@domain.com' && this.userSignup.password === 'Password123!'){
       this.router.navigate(["/profile"]);  }
       else{
         alert("SORRY BUT SOME FIELDS ARE INVALID PLEASE CORRECT THEM");
         this.userSignup.email="";
         this.userSignup.password="";
       }
   } 

}
 