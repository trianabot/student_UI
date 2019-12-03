import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-civil',
  templateUrl: './civil.component.html',
  styleUrls: ['./civil.component.css']
})
export class CivilComponent implements OnInit {

  selectedType:any;
  videoData:any=[];
  constructor(private userservice:StudentService) { }

  ngOnInit() {
    this.selectedType=sessionStorage.getItem("selectedType");
    this.getDataByType();
  }

  getDataByType(){
    let obj={
      type:this.selectedType
    }
    this.userservice.getvideosbySelectedType(obj).subscribe(data=>{
      this.videoData=data['data']
     console.log("this.videoData",  this.videoData);
    })
  }
}
