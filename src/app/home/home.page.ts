import { Component } from '@angular/core';
import { GoogleAuth } from 'capacitor-plugin-google-auth';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})  
export class HomePage {  
  
  constructor(){
    GoogleAuth.init()
  }

  

  async googleSignIn() {
    try {
      const googleUser = await GoogleAuth.signIn();      
      console.log('googleUser: ', googleUser);
    } catch (err) {
      console.error(err);
    }
  }




}
