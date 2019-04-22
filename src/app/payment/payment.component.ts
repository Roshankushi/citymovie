import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var RazorpayCheckout:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  onSubmit(){
    this.router.navigate(['/paymentdone']);
  }

PaymentDetails(){
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_wScHehratCnaID',
    //order_id: 'order_7HtFNLS98dSj8x',
    amount: '5000',
    name: 'foo',
    prefill: {
      email: 'pranav@razorpay.com',
      contact: '8879524924',
      name: 'Pranav Gupta'
    },
    theme: {
      color: '#F37254'
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
}

}
