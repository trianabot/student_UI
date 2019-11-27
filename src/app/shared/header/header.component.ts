import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { RouterModule, Routes,Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive:boolean;
  constructor(private adminservice:AdminService,private route:Router) { }

  ngOnInit() {
    this.isActive=JSON.parse(sessionStorage.getItem("isActive"));
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
      console.log("logout service data",data);
    },err=>{
      console.log("logout service err",err);
    })
  }
}
