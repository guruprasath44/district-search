import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'district-search';
  districtName = new FormControl('');
  area = new FormControl('');
  population = new FormControl('');
  districts: { value: string; display: string; }[] = [];
   constructor(){
      this.loadDistricts();
   }

   loadDistricts() {
      var allDistricts = 'Ariyalur, Chengalpattu, Chennai, Coimbatore, Cuddalore, Dharmapuri, Dindigul, Erode, Kallakurichi,\
      Kanchipuram, Kanyakumari, Karur, Krishnagiri, Madurai, Nagapattinam, Namakkal, Nilgiris, Perambalur, Pudukkottai,\
      Ramanathapuram, Ranipet, Salem, Sivaganga, Tenkasi, Thanjavur, Theni, Thoothukudi (Tuticorin), Tiruchirappalli,\
       Tirunelveli, Tirupathur, Tiruppur, Tiruvallur, Tiruvannamalai, Tiruvarur, Vellore, Viluppuram, Virudhunagar' ;
      this.districts =  allDistricts.split(/, +/g).map( function (district) {
         return {
            value: district.toUpperCase(),
            display: district
         };
      });
   }

}
