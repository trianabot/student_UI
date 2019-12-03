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
import { ViewdetailsComponent } from './stud/viewdetails/viewdetails.component';
import { ComputerComponent } from './techology/computer/computer.component';
import { MarketingComponent } from './techology/marketing/marketing.component';
import { BusinessComponent } from './techology/business/business.component';
import { MechanicalComponent } from './techology/mechanical/mechanical.component';
import { CivilComponent } from './techology/civil/civil.component';
import { ChemicalComponent } from './techology/chemical/chemical.component';
import { PharmacyComponent } from './techology/pharmacy/pharmacy.component';
import { ElectricalComponent } from './techology/electrical/electrical.component';

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
    MediaComponent,
    ViewdetailsComponent,
    ComputerComponent,
    MarketingComponent,
    BusinessComponent,
    MechanicalComponent,
    CivilComponent,
    ChemicalComponent,
    PharmacyComponent,
    ElectricalComponent
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
