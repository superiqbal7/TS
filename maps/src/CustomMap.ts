import { User } from './User';
import { Company } from './Company';
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

//--for additonal or case we need to import classes
//--ts limit number of propeties of mappable based on common properties of User and Company
//--we can ony refer to properties if both of them are in User and Company
  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude
      }
    })
  }

  // addCompanyMarker(company: Company) {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.latitude,
  //       lng: company.location.longitude
  //     }
  //   })
  // }
}
