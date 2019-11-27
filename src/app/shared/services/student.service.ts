import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiRoute = environment.apiEndPoint;
  constructor(private http: HttpClient,httpbackend: HttpBackend) {
    this.http = new HttpClient(httpbackend);
  }

  userRegistration(data) {
    return this.http.post(this.apiRoute + '/user/register', data);
  }

  userLogin(data) {
    return this.http.post(this.apiRoute + '/user/login', data);
  }

  
}
