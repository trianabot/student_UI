import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiRoute = environment.apiEndPoint;
  constructor(private http:HttpClient) { }
  getStudentData() {
    return this.http.get(this.apiRoute + '/user/getstudinfo');
  }

  verifyStudent(data){
    return this.http.post(this.apiRoute + '/user/verifystudent',data);
  }

  logout(data){
    return this.http.post(this.apiRoute + '/user/logout',data);
  }
}
