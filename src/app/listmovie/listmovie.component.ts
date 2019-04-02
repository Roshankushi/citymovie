import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listmovie',
  templateUrl: './listmovie.component.html',
  styleUrls: ['./listmovie.component.scss'],
})
export class ListmovieComponent implements OnInit {

  movie_date = '';
  movies = this.movieService.getMovies();
  constructor(private router:Router, private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }

  slideDidLoad(slides){
    slides.startAutoplay();
      }
onImage(){
this.router.navigate(['/payment']);
}
onBooking(){
  this.router.navigate(['/booking']);
}

}
