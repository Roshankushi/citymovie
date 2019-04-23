import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-landingcomponent',
  templateUrl: './landingcomponent.component.html',
  styleUrls: ['./landingcomponent.component.scss'],
})
export class LandingcomponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  onlogin(){
    this.router.navigate(['/login']);
  }

}
