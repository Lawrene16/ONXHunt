import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MaplayersPage } from '../pages/maplayers/maplayers';
import { OffgridPage } from '../pages/offgrid/offgrid';
import { MycontentPage } from '../pages/mycontent/mycontent';
import { ToolsPage } from '../pages/tools/tools';
import { TrackerPage } from '../pages/tracker/tracker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MaplayersPage,
    OffgridPage,
    MycontentPage,
    ToolsPage,
    TrackerPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MaplayersPage,
    OffgridPage,
    MycontentPage,
    ToolsPage,
    TrackerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
