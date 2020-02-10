import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginUsers} from '../login-users';
import {NewUser} from '../new-user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  login(user : LoginUsers){
    return this.http.post("https://nalo-test.herokuapp.com/v1/login" ,{
      "email":user.email,
      "password":user.password});
  }

  register(newuser:NewUser){
    return this.http.post("https://nalo-test.herokuapp.com/v1/signup" ,
    {
      "email":newuser.email,
      "password":newuser.Password,
      "name":newuser.userName,
      "role":newuser.role
    });
  }
}
