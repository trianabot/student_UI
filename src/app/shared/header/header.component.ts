import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { RouterModule, Routes,Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IfStmt } from '@angular/compiler';
import { Location } from '@angular/common';
import { StudentService } from '../services/student.service';
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
  showMenu:boolean =true;
  showUserProfile:boolean = false;
  myName = "";
  isUserLogged = false;
  keyword = 'userName';
  // data = [
  //    {
  //      id: 1,
  //      name: 'Usa'
  //    },
  //    {
  //      id: 2,
  //      name: 'England'
  //    }
  // ];
 data:any=[];
  constructor(private student:StudentService,private adminservice:AdminService,private route:Router,private location:Location) { }

  ngOnInit() {
    this.isActive=JSON.parse(sessionStorage.getItem("isActive"));
    this.gender = sessionStorage.getItem("gender");
    this.loggedInUser=sessionStorage.getItem("userId");
    
    if(this.loggedInUser == null || this.loggedInUser == undefined){
      this.showMenu = true;
      this.showUserProfile = false;
    }
    else{
      this.showUserProfile = true;
      this.showMenu = false;
    }
  this. getCources();
  this.getStudentData();
   this.student.$isLoggedIn.subscribe(data=>{
     this.isActive=data;
   })
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
  getCources(){
    this.adminservice.getCources().subscribe(data=>{
      this.category=data['data'];
    })
  }

  selectEvent(item) {
    console.log("selectEvent",item.userId);
    this.route.navigate(['/friend/'+item.userId]);
  }
 
  onChangeSearch(val: string) {
    console.log("onChangeSearch",val);
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    console.log("onFocused",e);
    // do something when input is focused
  }
  getStudentData(){
    this.adminservice.getStudentData().subscribe(data=>{
      this.data=data['data'];
    //  console.log("this.studentData",this.studentData);
    })
  }
  

}
