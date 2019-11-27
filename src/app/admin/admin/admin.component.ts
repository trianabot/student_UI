import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studentData:any=[];
  studentProfile:any;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.getStudentData();
  }
   
  getStudentData(){
    this.adminservice.getStudentData().subscribe(data=>{
      this.studentData=data['data'];
      console.log("this.studentData",this.studentData);
    })
  }

  veiwProfile(obj){
    sessionStorage.setItem("emailId",obj.emailId);
    console.log("obj",obj.emailId);
    this.studentProfile=obj;
  }

  verifyStudent(){
    console.log("dsfgbdf");
    let obj={
      emailId:sessionStorage.getItem("emailId"),
      isVerified:true
    }
    this.adminservice.verifyStudent(obj).subscribe(data=>{
      console.log("data after verifying student",data);
    },err=>{
      console.log("err while verifying student",err);
    });
  }
}
