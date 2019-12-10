import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '@angular/common/http';
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
  videoForm:FormGroup;
  uploadVideo: File;
  activityurl: any;
  loggedInUser:any;
  videoData:any=[];
  gender:any;
  public apiendpoint = environment.apiEndPoint;
  constructor(private adminservice:AdminService,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.loggedInUser=sessionStorage.getItem('userId');
    this.gender=sessionStorage.getItem('gender');
    this.videoForm=this.formbuilder.group({
      Topic:['',Validators.required],
      Subject:['',Validators.required],
      Cource:['',Validators.required],
    });
    this.getStudentData();
    this.getCources();
    this.getVideoData();
  }
  
  onSelectFile(event) {
    this.activityurl = ""
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.uploadVideo = event.target.files[0]
      reader.onload = (event) => {
        this.activityurl = (<FileReader>event.target).result;
      }
    }
  }

  onSubmit(){
    console.log("this.videoForm.value:  ",this.videoForm.value);
    console.log("this.uploadVideo:  ",this.uploadVideo)
        let mimeFormData: FormData = new FormData();
        mimeFormData.append('memefile', this.uploadVideo);
        mimeFormData.append('Cource', this.videoForm.value.Cource);
        mimeFormData.append('gender', this.gender);
        mimeFormData.append('Subject', this.videoForm.value.Subject);
        mimeFormData.append('userName',sessionStorage.getItem("userName"));
        mimeFormData.append('Topic', this.videoForm.value.Topic);
        mimeFormData.append('loggedInUser',sessionStorage.getItem("userId"));
        let mimeurl: string = this.apiendpoint + '/adminroute/savevedio/' + this.loggedInUser + new Date().getMilliseconds();
        this.adminservice.uploadMeme(mimeFormData, mimeurl).subscribe(res => {
          this.getVideoData();
          this.videoForm.reset();
          console.log("data",res);
          if (res instanceof HttpResponse) {
          }
          this.activityurl;
        }, error => {
          console.log("error", error);
        });
  }

  getStudentData(){
    this.adminservice.getStudentData().subscribe(data=>{
      this.studentData=data['data'];
    console.log("this.studentData",this.studentData);
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
        console.log("subjectData",this.subjectData);
     },err=>{
        console.log("getsubjectbyid",err);
     })
  }

  selectedSubject(selectedsub){
    this.selectedsub=selectedsub;
    console.log("selectedSubject",this.selectedsub,this.cource);

  }

  getVideoData(){
   this.adminservice.getVideos().subscribe(data=>{
     this.videoData=data['data'];
   })
  }
}
