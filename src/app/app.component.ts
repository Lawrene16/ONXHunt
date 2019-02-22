import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GotopremiumPage } from '../pages/gotopremium/gotopremium';
import { TabsPage } from '../pages/tabs/tabs';
import { MaplayersPage } from '../pages/maplayers/maplayers';
@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // rootPage:any = MaplayersPage;
  rootPage:any = MaplayersPage;


  pages: Array<{title: string, icon:string,component: any, pageName:string, index:any}>;


  constructor(public platform: Platform, 
    public statusBar: StatusBar, public splashScreen: SplashScreen) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Account', icon : 'ios-home', component: MaplayersPage, pageName: 'GotopremiumPage', index: 0 },
      { title: 'Join Now!', icon : 'ios-alert',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 1 },
      { title: 'Map Settings', icon : 'ios-settings',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 2 },      
      { title: 'Get Help', icon : 'ios-people',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 3 },
      { title: 'Share', icon : 'ios-share',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 4 },
      { title: 'Inbox', icon : 'ios-chatbubbles',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 5 },
      { title: 'Go Premium', icon : 'ios-flash',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 6 },                  
      { title: 'Logout', icon : 'ios-log-out',  component: GotopremiumPage, pageName: 'GotopremiumPage', index: 7 },


    ];

  }


  openPage(page) {

    // if(page.title == "Logout"){
    //   this.afireAuth.auth.signOut();
    //   console.log("THis function is goin to log outthe above user");
    // }
    this.nav.setRoot(page.component);


    // let params = {};

    // console.log(page.index);
 
    // // The index is equal to the order of our tabs inside tabs.ts
    // if (page.index) {
    //   params = { tabIndex: page.index };
    // }
 
    // // The active child nav is our Tabs Navigation
    // if (this.nav.getActiveChildNav() && page.index != undefined) {
    //   this.nav.getActiveChildNav().select(page.index);
    // } else {
    //   // Tabs are not active, so reset the root page 
    //   // In this case: moving to or from SpecialPage
    //   this.nav.setRoot(page.pageName, params);
    // }
  }


   
  // isActive(page) {
    
  //   let childNav = this.nav.getActiveChildNav();
 
  //   if (childNav) {
  //     if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
  //       return 'primary';
  //     }
  //     return;
  //   }
 
  //   // Fallback needed when there is no active childnav (tabs not active)
  //   if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
  //     return 'primary';
  //   }
  //   return;
  // }

  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}

