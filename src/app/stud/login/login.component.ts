import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {StudentService} from '../../shared/services/student.service';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  @Output('change') change = new EventEmitter();
  constructor(private formbuilder:FormBuilder,private studentService:StudentService,private route:Router) { }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      'emailId': ['',Validators.required],
      'password': ['',Validators.required],
    });
  }

  onSubmit(){
    let obj={
      emailId:this.loginForm.value.emailId,
      password:this.loginForm.value.password,
      isActive:true
    }
    this.studentService.userLogin(obj).subscribe(data=>{
      this.studentService.setUserName(data['userData'].isActive);
      sessionStorage.setItem("token",data['token']);
      sessionStorage.setItem("emailId",data['userData'].emailId);
      sessionStorage.setItem("isActive",data['userData'].isActive);
      sessionStorage.setItem("userId",data['userData'].userId);
      sessionStorage.setItem("course",data['userData'].course);
      sessionStorage.setItem("isProfileImage", data['userData']['isProfileImage']);
      sessionStorage.setItem("gender",data['userData'].gender);
      if(data['userData'].isAdmin==false){
       this.route.navigate(['/profile']);
      }
      if(data['userData'].isAdmin==true){
        this.route.navigate(['/admin']);
       }
    },err=>{
      console.log("login err",err);
    })
  }

}
