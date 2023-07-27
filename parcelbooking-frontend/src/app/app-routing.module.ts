import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdataComponent } from './userdata/userdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { ParcelsforhubComponent } from './parcelsforhub/parcelsforhub.component';
import { TrackingstatusComponent } from './trackingstatus/trackingstatus.component';
import { Demo1Component } from './demo1/demo1.component';

const routes: Routes = [
  // {path:'header',component: HeaderComponent},
  // {path:'footer',component: FooterComponent},
  {path:'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to login page by default
  {path:'home', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'userdata', component:UserdataComponent},
  {path:'demo', component:DemoComponent},
  {path:'userdata', component:UserdataComponent},
  {path:'parcelsforhub', component:ParcelsforhubComponent},
  {path:'trackingstatus/:id', component:TrackingstatusComponent},
  {path:'demo1',component:Demo1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
