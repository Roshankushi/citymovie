import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private regesterService:RegisterService) { }
customer:any={};
  ngOnInit() {
    this.customer={name:'',phone:'',address:'',email:'',password:''};
  }

 
  onRigister(customer){
  	this.regesterService.addRemoteCustomer(customer).subscribe(()=>{this.router.navigate(['/login']);});
  }

  onBack(){
  	this.router.navigate(['/login']);
  }
}
