import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../register.service';
declare var RazorpayCheckout:any;
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
// console.log(JSON.stringify(booking));
//   this.registerService.addRemoteCustomer(this.booking).subscribe(()=>{this.router.navigate(['/payment']);});
var options = {
  description: 'Credits towards consultation',
  image: 'https://static1.squarespace.com/static/5a5031001f318dd30f2083e1/t/5c4f48ea21c67cd91a84822a/1548699884343/?format=1000w',
  currency: 'INR',
  key: 'rzp_test_1eDgUDVcN1g2ir',
  // order_id: 'order_7HtFNLS98dSj8x',
  name: 'foo',
  prefill: {
  email: 'roshan@razorpay.com',
  contact: '9036624352',
  name: 'Roshan'
  },
  theme: {
  color: '##528FF0'
  }
  }
  var successCallback = function(success) {
  alert('payment_id: ' + success.razorpay_payment_id)
  var orderId = success.razorpay_order_id
  var signature = success.razorpay_signature
  }
  var cancelCallback = function(error) {
  alert(error.description + ' (Error '+error.code+')')
  }
  RazorpayCheckout.on('payment.success', successCallback)
  RazorpayCheckout.on('payment.cancel', cancelCallback)
  RazorpayCheckout.open(options)
  
  this.router.navigate(['/paymentdone'])
  }

}