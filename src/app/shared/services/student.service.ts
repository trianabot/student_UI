import { Injectable ,EventEmitter } from '@angular/core';
import { HttpClient, HttpBackend, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  $isLoggedIn = new EventEmitter();
  user:any;
  private apiRoute = environment.apiEndPoint;
  constructor(private http: HttpClient,httpbackend: HttpBackend) {
    this.http = new HttpClient(httpbackend);
  }

    setUserName(data) {
    this.$isLoggedIn.emit(data);
  }

  userRegistration(data) {
    return this.http.post(this.apiRoute + '/user/register', data);
  }

  userLogin(data) {
    return this.http.post(this.apiRoute + '/user/login', data);
  }

  pushFileToStorage(file: File, uploadUrl_): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('profileImg', file);
    const req = new HttpRequest('POST', uploadUrl_, formdata, {
      reportProgress: true,
      responseType: 'json'
    }
    );
    return this.http.request(req);
  }
  
  uploadMeme(mimeData:FormData, mimeUrl):Observable<HttpEvent<{}>>{
  
    let httpheaders:HttpHeaders = new HttpHeaders({
      'Authorization':'Bearer '+sessionStorage.getItem('token')
    });
    const req = new HttpRequest('POST', mimeUrl, mimeData, {
      headers:httpheaders,
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getVideos(){
   return this.http.get(this.apiRoute + '/adminroute/getvideos');
  }

  getvideosUserId(OwnerId){
    console.log("OwnerId",OwnerId);
    return this.http.post(this.apiRoute + '/adminroute/getvideosUserId',OwnerId);
  }
 
  getvideosbySelectedType(data){
    return this.http.post(this.apiRoute + '/adminroute/getvideosbyselectedtype',data);
   }

   //To get all cources 
   getCources(){
    return this.http.get(this.apiRoute + '/adminroute/getcources');
   }

   getFriendProfile(data){
    return this.http.post(this.apiRoute + '/user/friendprofile',data);
   }

   // Like the meme posted

  likePost(obj){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+sessionStorage.getItem('token')
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.put(this.apiRoute + "/user/likePost",obj,options);

  }

  // Dislike the meme posted

  dislikePost(obj) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+sessionStorage.getItem('token')
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.put(this.apiRoute + "/user/dislikePost",obj,options);
  }
  
}
