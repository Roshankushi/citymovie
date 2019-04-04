import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import  MovieService from '../movie.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {


  constructor(private movieService:MovieService, private router:Router, private route:ActivatedRoute) { }

  id:number;
  
  private sub:any;
  movie:any={};
  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.id= +params['id'];
      console.log("id is"+this.id);
    });

    this.movieService.getRemoteMovieById(this.id).subscribe((result)=>{this.movie=result; });
  
  }

  onPayment(){
    this.router.navigate(['/payment']);
  }

}
