import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiesService } from '../apies.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private api:ApiesService){}
   submit(signup:NgForm){
    console.log(signup.value)
      const data={

        email:signup.value.username,
        password:signup.value.pass,
        pass:signup.value.re_pass,
      }
      if(data.password==data.pass){
      
        this.api.getData(data).subscribe((res)=>{
          console.log(res);
        })
      }
        else{
          alert("Password doesn't match")
        }
      }
    
   }
  
