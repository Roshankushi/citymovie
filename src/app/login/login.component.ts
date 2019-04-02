import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
customers=[];
  
 customer:any={};
   constructor(private router: Router, private registerService:RegisterService) { }
 
  

   ngOnInit() {
    this.registerService.getRemoteCutomers().subscribe(
      (result) => this.customers = result 
      
      );
      
  }

   onLogin(){
    for(var i=0;i<this.customers.length;i++){
      if((this.customer.username == this.customers[i].name) && (this.customer.password == this.customer.password)){
        this.router.navigate(['/listmovie']);
      }
    }

    }
    onRegister(){
      this.router.navigate(['/register']);
     }
    
   }

   
 
 
