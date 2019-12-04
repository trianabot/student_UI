import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup
  courceData:any=[];
  constructor(private formbuilder:FormBuilder,private studentService:StudentService,private route:Router) { }

  ngOnInit() {
    this.registrationForm=this.formbuilder.group({
      'emailId': ['',Validators.required],
      'password': ['',Validators.required],
      'userName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'gender': ['',Validators.required],
      'city':['',Validators.required],
      'district':['',Validators.required],
      'course':['',Validators.required],
      'degree':['',Validators.required],
      'university':['',Validators.required],
    });
    this.getCources();
  }

  onSubmit(){
    let obj={
      emailId:this.registrationForm.value.emailId,
      password:this.registrationForm.value.password,
      userName:this.registrationForm.value.userName,
      lastName:this.registrationForm.value.lastName,
      gender:this.registrationForm.value.gender,
      city:this.registrationForm.value.city,
      district:this.registrationForm.value.district,
      course:this.registrationForm.value.course,
      degree:this.registrationForm.value.degree,
      university:this.registrationForm.value.university,
    }
    console.log("obj",obj);
    this.studentService.userRegistration(obj).subscribe(data=>{
      alert("your account will verified by admin will let you know");
       this.registrationForm.reset();
    },err=>{
      console.log("student registration error",err);
    })
  }

  getCources(){
    this.studentService.getCources().subscribe(data=>{
      this.courceData=data['data'];
    })
  }
}

