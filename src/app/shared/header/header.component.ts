import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { RouterModule, Routes,Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive:boolean;
  gender : any;
  public apiendpoint = environment.apiEndPoint;
  loggedInUser:any;
  category:any=[];
  subjectData:any=[];
  
  constructor(private adminservice:AdminService,private route:Router) { }

  ngOnInit() {
    this.isActive=JSON.parse(sessionStorage.getItem("isActive"));
    this.gender = sessionStorage.getItem("gender");
    this.loggedInUser=sessionStorage.getItem("userId");
    this.category=["Computer Science",
    "Mechanical",
    "Electrical",
    "Marketing",
    "Civil",
    "Chemical",
    "Pharmacy","Accounting"];
  }
   
  logout(){
    let obj={
      emailId:sessionStorage.getItem("emailId"),
      isActive:false
    }
    this.adminservice.logout(obj).subscribe(data=>{
      sessionStorage.removeItem("isActive");
      this.isActive=false;
      this.route.navigate(['/login']);
     
    },err=>{
      console.log("logout service err",err);
    })
  }

  getVideosByType(selectedType){
    sessionStorage.setItem("selectedType",selectedType);
    if(selectedType=="Computer Science"){
      this.route.navigate(['/computer']);
    }
    if(selectedType=="Mechanical"){
      this.route.navigate(['/mechanical']);
    }
    if(selectedType=="Electrical"){
      this.route.navigate(['/electrical']);
    }
    if(selectedType=="Marketing"){
      this.route.navigate(['/marketing']);
    }
    if(selectedType=="Civil"){
      this.route.navigate(['/civil']);
    }
    if(selectedType=="Chemical"){
      this.route.navigate(['/chemical']);
    }
    if(selectedType=="Pharmacy"){
      this.route.navigate(['/pharmacy']);
    }
    if(selectedType=="Accounting"){
      this.route.navigate(['/business']);
    }
  }
}
