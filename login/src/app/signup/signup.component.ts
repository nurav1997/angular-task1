import { Component, OnInit } from '@angular/core';
import {NewUser} from '../new-user'
import {Router} from "@angular/router"
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   userSignup=new NewUser('','','','','');
   
  constructor(private router: Router,private _ApiService : ApiService){};

  ngOnInit() {
  }
   onSubmit()
  {
    if (this.userSignup.Password == this.userSignup.cPassword)
    {
      this._ApiService.register(this.userSignup).subscribe(
        data =>{
          alert("Account Created Successfully. Please Check mail for activate your account thank you!");
          alert("You are being redirected to login page...................");
          this.router.navigate(["/userinput"]);
        },
        error =>{
          alert(error.error);
          this.userSignup.userName="";
          this.userSignup.role="";
          this.userSignup.email="";
          this.userSignup.Password="";
          this.userSignup.cPassword="";
        }
      ) 
  }
else{ 
   alert("SORRY PASSWORD AND CONFIRM PASSWORD DO NOT MATCH");
 }
}
}
 