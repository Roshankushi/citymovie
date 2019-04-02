import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    
    {
      title: 'List',
      url: '/listmovie',
      icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'PaymentGateway',
      url: '/payment',
      icon: 'contact'
    },
    {
      title: 'Offers',
      url: '/offer',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'contact'
    },
    {
      title: 'Booking',
      url: '/booking',
      icon: 'log-in'
    },
    {
      title: 'PaymentDone',
      url: '/paymentdone',
      icon: 'log-in'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
