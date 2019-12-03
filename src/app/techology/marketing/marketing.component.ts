import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

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
