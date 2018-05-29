import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  userModel:User = {firstname:"",lastname:"",email:"",password:"",phonenumber:""};

  constructor() { }
  
  submitForm(form:any):void{
    console.log(form);
  }
}
