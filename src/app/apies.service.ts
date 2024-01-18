import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiesService {

  constructor(private http: HttpClient) { }
  getData(email:any):Observable<any>{
    return this.http.post('http://localhost:3000/register',email)
    
  }
  userLogin(user:any):Observable<any>{
    return this.http.get(`http://localhost:3000/register?email=${user.email}&password=${user.password}`)
}
roomData(id:any):Observable<any>{
   return this.http.get(`http://localhost:3000/hotels/${id}`)
}
placeData():Observable<any>{
   return this.http.get('http://localhost:3000/places')
}
hotelData():Observable<any>{
  return this.http.get('http://localhost:3000/Rooms')
}
addtocart(id:any):Observable<any>{
  return this.http.get('http://localhost:3000/Rooms/'+id);

}
sigle_place(id:any):Observable<any>{
 return this.http.get('http://localhost:3000/places/'+id)
}
addcartdata(data:any):Observable<any>{
  return this.http.post('http://localhost:3000/addToCart',data);
}
getcartdata():Observable<any>{
  return this.http.get('http://localhost:3000/addToCart');
}
delete_data(id:any):Observable<any>{
  return this.http.delete('http://localhost:3000/addToCart/' +id)
}
}
