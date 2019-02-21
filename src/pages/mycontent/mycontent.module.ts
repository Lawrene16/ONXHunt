import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycontentPage } from './mycontent';

@NgModule({
  declarations: [
    MycontentPage,
  ],
  imports: [
    IonicPageModule.forChild(MycontentPage),
  ],
})
export class MycontentPageModule {}
