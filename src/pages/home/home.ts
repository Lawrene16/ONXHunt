import { Component, ViewChild, ViewChildDecorator, ElementRef} from '@angular/core';
// import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;

  constructor() {

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

}
