import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiesService } from '../apies.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  rooms:any;
  constructor(private route:ActivatedRoute, private room:ApiesService){}
  ngOnInit(){
    this. id= this.route.snapshot.params['id'];
    console.log(this.id);
    this.room.roomData(this.id).subscribe((res)=>{
        console.log(res);
        this.rooms=res;
    })
  }
}
