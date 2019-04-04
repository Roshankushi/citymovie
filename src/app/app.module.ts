import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import {ListmovieComponent} from './listmovie/listmovie.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { OfferComponent } from './offer/offer.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PaymentdoneComponent } from './paymentdone/paymentdone.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,ListmovieComponent,OfferComponent,PaymentComponent,BookingComponent,ForgotComponent,PaymentdoneComponent,DetailsComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
