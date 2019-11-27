import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './stud/registration/registration.component';
import { LoginComponent } from './stud/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ProfileComponent } from './stud/profile/profile.component';
import { SloginComponent } from './stud/slogin/slogin.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'studentlogin/:emailId',component: SloginComponent },
  { path: 'studentlogin',component: SloginComponent },
  { path: '',redirectTo: '/register',pathMatch: 'full'},
  { path: 'admin', component: AdminComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
