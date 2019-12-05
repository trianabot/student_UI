import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  userId:any;
  friendData:any;
  constructor(private activeRoute:ActivatedRoute,private studentService:StudentService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(data=>{
      this.userId=data['userId'];
      console.log("this.userId",this.userId);
    });
    this.getFriendProfile();
  }

  getFriendProfile(){
    let obj={
      userId:this.userId
    }
    this.studentService.getFriendProfile(obj).subscribe(data=>{
      this.friendData=data['data'][0];
      console.log("data from friend profile",this.friendData)
    },err=>{
      console.log("Error while getting friend profile",err);
    });
  }

}
