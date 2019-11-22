import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './stud/registration/registration.component';
import { LoginComponent } from './stud/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin/admin.component';
const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login',component: LoginComponent },
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'admin', component: AdminComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
