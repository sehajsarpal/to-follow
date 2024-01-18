import { Component } from '@angular/core';
import { ApiesService } from '../apies.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private api:ApiesService , private route: Router){}
  log(login:NgForm){
    console.log(login.value);
    const user={
      email:login.value.username,
      password:login.value.password
    };
    this.api.userLogin(user).subscribe((res)=>{
      let data:any=res;
      console.log(res +"res");
      if(data.length > 0 && user.email===data[0].email && user.password===data[0].password){
        alert('login');
        this.route.navigate(['/']);
      }
      else{
        alert('not correct');
      }
    })
  }
}
