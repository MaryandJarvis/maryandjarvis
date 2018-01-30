import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('didLoad');
  }

  login(){
    this.navCtrl.setRoot('MenuPage');
    }
  signup() {
    this.navCtrl.push(Signup, {}, { animate: false });
  }
}
