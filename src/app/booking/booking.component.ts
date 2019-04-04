import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../register.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  booking={cutomer_id:'',movie_id:'',tickets:'',movie_name:'',movie_time:'',theatre:'',screen:'',movie_date:'',date:'',amount:'',ticket_price:''};
  constructor(private router:Router,private registerService:RegisterService) { }

  ngOnInit() {}

  onRigister(booking){
    console.log(JSON.stringify(booking));
  	this.registerService.addRemoteCustomer(this.booking).subscribe(()=>{this.router.navigate(['/payment']);});
  }

}
