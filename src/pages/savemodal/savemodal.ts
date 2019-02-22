import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SavemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-savemodal',
  templateUrl: 'savemodal.html',
})
export class SavemodalPage {

  constructor(public navCtrl: NavController,
    private view: ViewController,
     public navParams: NavParams) {
  }

  ionViewWillLoad() {
    const data = this.navParams.get('data');
    console.log(data);
  }

  closeModal() {
    const data = {
      name: 'John Doe',
      occupation: 'Milkman'
    };
    this.view.dismiss(data);
  }

}
