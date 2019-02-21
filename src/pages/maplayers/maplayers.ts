import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the MaplayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maplayers',
  templateUrl: 'maplayers.html',
})
export class MaplayersPage {

  @ViewChild(Content) pagebody : Content


  showOne = false;
  showTwo = false;
  showThree = false;
  showFour = false;
  showFive = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad MaplayersPage');
    // this.pagebody.scrollToBottom();

  }



  openOptions(num){
    
    switch (num) {
      case 1:
        break;

      case 3:
        if(this.showFour == false){
          this.showFour = true; 
          this.showFive = false;
           this.showOne = false; 
           this.showTwo = false;
          this.showThree = false;
          this.pagebody.scrollToBottom();  
          
        }else{
          this.pagebody.scrollToTop(); 
          this.showFour = false;
        }
        break;
    
      case 4:
        if(this.showFive == false){
          this.showFour = false; 
          this.showFive = true;
          this.showOne = false; 
           this.showTwo = false;
          this.showThree = false;
          this.pagebody.scrollToBottom();  
        }else{
          this.pagebody.scrollToTop(); 
          this.showFive = false;
        }
        break;
    
      default:
        break;
    }

  }

}
