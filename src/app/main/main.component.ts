import { Component, OnInit } from '@angular/core';
import { ApiesService } from '../apies.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private places:ApiesService){  }
  place: any;
  ngOnInit() :void{
       this.places.placeData().subscribe((res)=>{
        console.log(res);
        this.place=res;
       })
  }

}
