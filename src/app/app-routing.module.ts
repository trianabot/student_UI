import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './stud/registration/registration.component';
import { LoginComponent } from './stud/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProfileComponent } from './stud/profile/profile.component';
import { SloginComponent } from './stud/slogin/slogin.component';
import { ViewdetailsComponent } from './stud/viewdetails/viewdetails.component';
import { ComputerComponent } from './techology/computer/computer.component';
import { MarketingComponent } from './techology/marketing/marketing.component';
import { BusinessComponent } from './techology/business/business.component';
import { MechanicalComponent } from './techology/mechanical/mechanical.component';
import { CivilComponent } from './techology/civil/civil.component';
import { ChemicalComponent } from './techology/chemical/chemical.component';
import { PharmacyComponent } from './techology/pharmacy/pharmacy.component';
import { ElectricalComponent } from './techology/electrical/electrical.component';
import { FriendComponent } from './stud/friend/friend.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'studentlogin/:emailId',component: SloginComponent },
  { path: 'studentlogin',component: SloginComponent },
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'admin', component: AdminComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'viewdetails',component:ViewdetailsComponent},
  {path:'computer',component:ComputerComponent},
  {path:'marketing',component:MarketingComponent},
  {path:'business',component:BusinessComponent},
  {path:'mechanical',component:MechanicalComponent},
  {path:'civil',component:CivilComponent},
  {path:'chemical',component:ChemicalComponent},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'electrical',component:ElectricalComponent},
  { path: 'friend/:userId',component: FriendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
