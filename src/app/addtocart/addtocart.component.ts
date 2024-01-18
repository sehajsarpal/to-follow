import { Component } from '@angular/core';
import { ApiesService } from '../apies.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent {
  carts:any;
  hotel_name:any;
  delete:any;
  itemData:any;
  cartData:any;
  deleteItem:any;
  constructor(private cart:ApiesService){}
  ngOnInit():void{
  
    this.cart.getcartdata().subscribe((data:any)=>{
      console.log(data);
      this.carts=data;
      const room=data[0].hotel_id
      console.log(room);
      
      this.cart.roomData(room).subscribe((res)=>{
        console.log(res +"room data");
      this.hotel_name=res;
      })
    })
    this. itemData = localStorage.getItem('data');
    this.cartData=JSON.parse(this.itemData);
    console.log(this.cartData);
  }
  delete_data(id:any){
    console.log(id)
    this.deleteItem= localStorage.removeItem('cartData'+id);
    // this.cart.delete_data(id).subscribe((response:any)=>{
        
    //     window.location.reload()
    // })
  }
}
    