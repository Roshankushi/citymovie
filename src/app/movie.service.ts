import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {
  private movieUrl = 'http://192.168.0.46:3002/api/movies'

  constructor(private http: HttpClient) { }

  movies = [];

getRemoteMovies(): Observable<[]>{
  return this.http.get<[]>(this.movieUrl); 		
}

addRemoteMovie(customer):Observable<any>{
  return this.http.post(this.movieUrl,customer);
}

deleteRemoteMovie(movie): Observable<[]>{
  return this.http.delete<[]>(this.movieUrl+'/'+movie.id);
}
getMovies(){
  return this.movies;
}

updateRemoteMovie(movie):Observable<any>{
  return this.http.put(this.movieUrl + "/"+movie.id,movie);
}

getRemoteMovieById(id):Observable<any>{
 return this.http.get<[]>(this.movieUrl + "/"+id);
}
}
