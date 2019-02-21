import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaplayersPage } from './maplayers';

@NgModule({
  declarations: [
    MaplayersPage,
  ],
  imports: [
    IonicPageModule.forChild(MaplayersPage),
  ],
})
export class MaplayersPageModule {}
