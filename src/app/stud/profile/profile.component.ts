import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminService } from 'src/app/shared/services/admin.service';
import { HttpResponse } from '@angular/common/http';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  public loggedInUser: any;
  public profileImg: string;
  public gender:any;
  uploadImage: File;
  activityurl: any;
  userPost:any=[];
  userCource:any;
  userName:any;
  city:any;
  public apiendpoint = environment.apiEndPoint;
  constructor(private userService:StudentService) { }

  ngOnInit() {
    this.loggedInUser=sessionStorage.getItem("userId");
    console.log(" this.loggedInUser"+ this.loggedInUser);
    this.gender=sessionStorage.getItem("gender");
    this.userCource=sessionStorage.getItem("course");
    this.userName=sessionStorage.getItem("userName");
    this.city=sessionStorage.getItem("city");
    this.getUserPost();
  }

  processFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    let apiendpoint = environment.apiEndPoint;
    let fileUrl = apiendpoint + '/uploadProfilePic/' + this.loggedInUser;
    this.userService.pushFileToStorage(this.currentFileUpload, fileUrl).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.profileImg = event.body['profileImage'];
        if (event.status === 200) {
          sessionStorage.setItem("isProfileImage", "true");
          location.reload();
        }
      }
    });
    this.selectedFiles = undefined;
  }

  onSelectFile(event) {
    this.activityurl = ""
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.uploadImage = event.target.files[0]
      reader.onload = (event) => {
        this.activityurl = (<FileReader>event.target).result;
      }
    }
  }
  saveVideo(data) {
    console.log("data",data);
    let mimeFormData: FormData = new FormData();
    mimeFormData.append('memefile', this.uploadImage);
    mimeFormData.append('type', data);
    mimeFormData.append('userName',sessionStorage.getItem("userName"));
    mimeFormData.append('loggedInUser',sessionStorage.getItem("userId"));
    let mimeurl: string = this.apiendpoint + '/adminroute/savevedio/' + this.loggedInUser + new Date().getMilliseconds();
    this.userService.uploadMeme(mimeFormData, mimeurl).subscribe(res => {
      this.getUserPost();
      if (res instanceof HttpResponse) {
      }
      this.activityurl;
    }, error => {
      console.log("error", error);
    });
  }

  getUserPost(){
    let obj={
      userId:this.loggedInUser
    }
    this.userService.getvideosUserId(obj).subscribe(data=>{
      this.userPost=data['data'];
      console.log("this.userPost",this.userPost);
    },err=>{
    })
  }

  likePost(obj) {
    let body = {
      userId: this.loggedInUser,
      memeId: obj
    }
    this.userService.likePost(body).subscribe(data => {
      if (data) {
        this.getUserPost();
      }
    });
  }

  dislikePost(obj) {
    console.log(obj);
    let body = {
      userId: this.loggedInUser,
      memeId: obj
    };
    this.userService.dislikePost(body).subscribe(data => {
      if (data) {
        this.getUserPost();
      }
    });
  }


}
