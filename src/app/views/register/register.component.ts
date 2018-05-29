import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {NgClass} from '@angular/common'; //anlamadim
import { User } from '../../models/User';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  userModel:User = {firstname:"",lastname:"",email:"",password:"",phonenumber:""};

  constructor() { }
  
  submitForm(form:any):void{
    console.log(form);
  }


}
