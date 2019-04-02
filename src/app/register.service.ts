import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private customerUrl = 'http://192.168.0.72:3002/api/customers'
  constructor( private http:HttpClient) { }


  addRemoteCustomer(customer):Observable<any>{
  	return this.http.post(this.customerUrl,customer);
 }

 getRemoteCutomers():Observable<[]>{
  return this.http.get<[]>(this.customerUrl);
 }

}
