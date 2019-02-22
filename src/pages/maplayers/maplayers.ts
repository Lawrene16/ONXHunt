import { Component, ViewChild, ViewChildDecorator, ElementRef } from '@angular/core';
import { IonicPage, NavController, Modal, ModalController, ModalOptions, ActionSheetController, NavParams, Content } from 'ionic-angular';
import { HomePage } from '../home/home';


declare var google: any;
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

  @ViewChild(Content) pagebody : Content;
  @ViewChild('map') mapRef: ElementRef;


  public toggled: boolean = false;
  showOne = false;
  showTwo = false;
  showThree = false;
  showFour = false;

  constructor(public navCtrl: NavController, 
    private modal: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
    this.toggled = false;
  }

  ionViewWillEnter() {
    this.displayMap();
  }

  displayMap(){
    const location = new google.maps.LatLng('4.815554', '7.049844');

    const options = {
      center:location,
      zoom: 12,
      disableDefaultUI: true,
      streetViewControl: false,
      mapTypeId: 'hybrid'
    };


    const map = new google.maps.Map(this.mapRef.nativeElement, options);


    this.addMarker(location, map);
  }

  addMarker(position,map){
    return new google.maps.Marker({
      position, map
    });
  }
    // public toggle(): void {
    //   this.toggled = !this.toggled;
    // } 

    toggle(){
      this.navCtrl.push(HomePage);
    }
    // cancelSearch(){
    //   this.toggle();
    // }


  openOptions(num){
    
    switch (num) {
      case 1:
        break;

      case 3:
        if(this.showThree == false){
          this.showThree = true; 
           this.showOne = false; 
           this.showTwo = false;
          this.showFour = false;
          // this.pagebody.scrollToBottom();  
          
        }else{
          // this.pagebody.scrollToTop(); 
          this.showThree = false;
        }
        break;
    
      case 4:
        if(this.showFour == false){
          this.showFour = true;
          this.showOne = false; 
           this.showTwo = false;
          this.showThree = false;
          this.pagebody.scrollToBottom();  
        }else{
          this.pagebody.scrollToTop(); 
          this.showFour = false;
        }
        break;
    
      default:
        break;
    }

  }

  openModal(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to logout',
      buttons: [
        {
          text: 'Logout',
          role: 'destructive',
          handler: () => {
            // this.logoutFacebook();
            // this.logoutEmail();
            // this.logoutTwitter();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }


  openSaveModal() {

    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create('SavemodalPage', { data: myModalData }, myModalOptions);

    myModal.present();

    myModal.onDidDismiss((data) => {
      console.log("I have dismissed.");
      console.log(data);
    });

    myModal.onWillDismiss((data) => {
      console.log("I'm about to dismiss");
      console.log(data);
    });

  }
}
