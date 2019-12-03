import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  selectedType:any;
  videoData:any=[];
  public apiendpoint = environment.apiEndPoint;
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
