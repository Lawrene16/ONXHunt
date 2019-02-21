import { Component } from '@angular/core';
import { MaplayersPage } from '../maplayers/maplayers';
import { OffgridPage } from '../offgrid/offgrid';
import { MycontentPage } from '../mycontent/mycontent';
import { ToolsPage } from '../tools/tools';
import { TrackerPage } from '../tracker/tracker';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MaplayersPage;
  tab2Root = OffgridPage;
  tab3Root = MycontentPage;
  tab4Root = ToolsPage;
  tab5Root = TrackerPage;

  

  constructor() {

  }
  
}