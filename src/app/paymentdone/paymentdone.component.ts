import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentdone',
  templateUrl: './paymentdone.component.html',
  styleUrls: ['./paymentdone.component.scss'],
})
export class PaymentdoneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  onListMovie(){
     this.router.navigate(['/listmovie']);
     }
  

}
