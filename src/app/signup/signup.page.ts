import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name:any;
  email:any;
  password:any;

  constructor(private navCtrl:NavController) { }

  gotosignin(){
    this.navCtrl.navigateForward('login');
  }

  SignUp(){

  }

  ngOnInit() {
  }

}
