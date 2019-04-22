import { Component, OnInit } from '@angular/core';
declare var RazorpayCheckout:any;
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import MovieService from '../movie.service';
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
// this.router.navigate(['/payment']);
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

