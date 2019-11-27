import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './stud/registration/registration.component';
import { LoginComponent } from './stud/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin/admin.component';
import { StudentService } from './shared/services/student.service';
import { HttpintercepterService } from './shared/services/httpintercepter.service';
import { ProfileComponent } from './stud/profile/profile.component';
import { AdminService } from './shared/services/admin.service';
import { SloginComponent } from './stud/slogin/slogin.component';
import { MediaComponent } from './admin/media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    ProfileComponent,
    SloginComponent,
    MediaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService,
    AdminService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpintercepterService,
    multi: true,
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
