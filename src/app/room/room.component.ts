import { Component , OnInit} from '@angular/core';
import { ApiesService } from '../apies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{
 
  constructor(private route:ActivatedRoute, private roomApi:ApiesService){}
  room:any;
  id:any;
  itemData:any;
  roomPrice:any;
  singleRoom:any;
  singleplace:any;
  addcartdata:any;
  cartData:any;
cartId:number=0;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
      this.roomApi.hotelData().subscribe((res)=>{
        console.log(res);
        this.room=res
      })
  }
  get_data(id:any){
    this.cartId++;
     console.log(id +"room id")
     this.roomApi.addtocart(id).subscribe((res)=>{
      console.log(res+ "add this data to cart");
      this.singleRoom=res;
     this.roomPrice=this.singleRoom.price
      console.log(this.roomPrice+ "price")
       this.cartData={
        cart_id:this.cartId,
         price:this.roomPrice,
         hotel_id:this.id,
         room_id:this.singleRoom.id,
           }
           
let data={
  id:res.id,
  title:res.title

}
var storedData = localStorage.getItem('data');
var records = storedData ? JSON.parse(storedData) : [];

if (Array.isArray(records)) {
records.push(this.cartData);
localStorage.setItem('data', JSON.stringify(records));
} else {
var newRecords = [records];
newRecords.push(this.cartData);
localStorage.setItem('data', JSON.stringify(newRecords));

}
this. itemData = localStorage.getItem('data');
    let parsed=JSON.parse(this.itemData);
    console.log(parsed);


     })
     this.roomApi.sigle_place(this.id).subscribe((res)=>{
       this.singleplace=res;
       console.log(this.singleplace.hotel_name);
     })


     this.roomApi.addcartdata(this.cartData).subscribe((res)=>{
      this.addcartdata=res;
      console.log("data inserted");
     })
   
  }
}
