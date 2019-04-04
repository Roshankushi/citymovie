import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingUrl = 'http://192.168.0.46:3002/api/booking'
booking=[];

  constructor(private http:HttpClient) { }

  getRemoteCutomers():Observable<[]>{
    return this.http.get<[]>(this.bookingUrl);
   }

  addRemoteCustomer(booking):Observable<any>{
  	return this.http.post(this.bookingUrl,booking);
 }



}
