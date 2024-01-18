import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { RoomComponent } from './room/room.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'room/:id',component:RoomComponent},
  {path:'addtocart',component:AddtocartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
