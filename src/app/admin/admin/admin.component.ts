import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  studentData:any=[];
  studentProfile:any;
  category:any=[];
  subject:any;
  cource:any;
  selectedCource:any;
  subjectData:any=[];
  selectedsub:any;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.getStudentData();
    this.getCources();
  }
   
  getStudentData(){
    this.adminservice.getStudentData().subscribe(data=>{
      this.studentData=data['data'];
    //  console.log("this.studentData",this.studentData);
    })
  }

  veiwProfile(obj){
    sessionStorage.setItem("emailId",obj.emailId);
  //  console.log("obj",obj.emailId);
    this.studentProfile=obj;
  }

  verifyStudent(){
    console.log("dsfgbdf");
    let obj={
      emailId:sessionStorage.getItem("emailId"),
      isVerified:true
    }
    this.adminservice.verifyStudent(obj).subscribe(data=>{
  //    console.log("data after verifying student",data);
    },err=>{
      console.log("err while verifying student",err);
    });
  }

  addSubject(selectedCource){
   this.selectedCource=selectedCource;
  }

  addSubjectData(subject){
    let obj={
      course:this.selectedCource,
      subject:subject
    }
 //   console.log("obj",obj);
    this.adminservice.addSubject(obj).subscribe(data=>{
      this.selectedCource='';
      console.log("data from add subject method",data);
    },err=>{
      console.log("err from add subject method",err);
    })
  }
  

  getCources(){
    this.adminservice.getCources().subscribe(data=>{
      this.category=data['data'];
    })
  }
  addCource(cource){
    let obj={
      course:cource
    }
 //   console.log("obj",obj);
    this.adminservice.addCource(obj).subscribe(data=>{
      this.getCources();
      this.cource='';
      console.log("data from add cource method",data);
    },err=>{
      console.log("err from add cource method",err);
    })
  }

  selectCategory(cource){
    this.cource=cource;
    let obj={
      course:cource
    }
     this.adminservice.getsubjectbyid(obj).subscribe(data=>{
       this.subjectData=data['data'][0]['subjects']
        console.log("getsubjectbyid",this.subjectData);
     },err=>{
        console.log("getsubjectbyid",err);
     })
  }

  selectedSubject(selectedsub){
    this.selectedsub=selectedsub;
    console.log("selectedSubject",this.selectedsub,this.cource);

  }
}
