import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { ListmovieComponent } from './listmovie/listmovie.component';
import { ForgotComponent } from './forgot/forgot.component';
import { BookingComponent } from './booking/booking.component';
import { OfferComponent } from './offer/offer.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentdoneComponent } from './paymentdone/paymentdone.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'listmovie',
    component: ListmovieComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'offer',
    component: OfferComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'paymentdone',
    component: PaymentdoneComponent
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
