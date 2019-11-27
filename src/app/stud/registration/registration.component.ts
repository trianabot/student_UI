import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup
  cities:any=[];
  constructor(private formbuilder:FormBuilder,private studentService:StudentService,private route:Router) { }

  ngOnInit() {
    this.registrationForm=this.formbuilder.group({
      'emailId': ['',Validators.required],
      'password': ['',Validators.required],
      'userName': ['',Validators.required],
      'gender': ['',Validators.required],
      'city':['',Validators.required],
    });
    this.cities=["Mumbai","Delhi","Bangalore","Hyderabad","Ahmedabad",
    "Chennai","Kolkata","Surat","Pune","Jaipur","Lucknow",
    "Kanpur","Nagpur","Indore","Thane","Bhopal","Visakhapatnam",
    "Pimpri & Chinchwad","Patna","Vadodara","Ghaziabad","Ludhiana",
    "Agra","Nashik","Faridabad","Meerut","Rajkot","Kalyan & Dombivali",
    "Vasai & Virar","Varanasi","Srinagar","Aurangabad","Dhanbad","Amritsar",
    "Navi_Mumbai","Allahabad","Ranchi","Haora","Coimbatore","Jabalpur",
    "Gwalior","Vijayawada","Jodhpur","Madurai","Raipur","Kota","Guwahati",
    "Chandigarh","Solapur","Hubli_Dharwad","Bareilly","Moradabad","Mysore",
    "Gurgaon","Aligarh","Jalandhar","Tiruchirappalli","Bhubaneswar","Salem",
    "Mira","Bhayander","Thiruvananthapuram","Bhiwandi","Saharanpur","Gorakhpur",
    "Guntur","Bikaner","Amravati","Noida","Jamshedpur","Bhilai","Warangal","Cuttack",
    "Firozabad","Kochi","Dehradun","Durgapur","Asansol","Nanded","Kolapur","Ajmer",
    "Gulbarga","Jamnagar","Ujjain","Loni","Siliguri","Jhansi","Ulhasnagar","Nellore",
    "Jammu","Sangli","Belgaum","Mangalore","Ambattur","Tirunelveli","Malegoan","Gaya",
    "Jalgaon","Udaipur","Maheshtala"];
  }

  onSubmit(){
    let obj={
      emailId:this.registrationForm.value.emailId,
      password:this.registrationForm.value.password,
      userName:this.registrationForm.value.userName,
      gender:this.registrationForm.value.gender,
      city:this.registrationForm.value.city,
    }
    console.log("obj",obj);
    this.studentService.userRegistration(obj).subscribe(data=>{
      alert("your account will verified by admin will let you know");
       this.registrationForm.reset();
    },err=>{
      console.log("student registration error",err);
    })
  }
}


// "userName": "moni",
// "emailId": "monikachhatre22@gmail.com",
// "password": "123",
// "gender":"female",
// "city": "nanded",