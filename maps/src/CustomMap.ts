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

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.latitude,
        lng: user.location.longitude
      }
    })
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.latitude,
        lng: company.location.longitude
      }
    })
  }
}
