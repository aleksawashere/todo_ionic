import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  credentials:FormGroup

  constructor(
    private navCtrl:NavController,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router) {}

  gotosignup(){
    this.navCtrl.navigateForward('signup');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength]],
    })
  }

  //easy access for form fields
  get email(){
    return this.credentials.get('email')
  }

  get password(){
    return this.credentials.get('password')
  }

  async register(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true});
    }
    else{
      this.showAlert('Registration failed!', 'Please try again.');
    }
    
  }
  
  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/home', {replaceUrl: true});
    }
    else{
      this.showAlert('Login failed!', 'Please try again.');
    }
  }

  async showAlert(header, message){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['OK']
    });

    await alert.present();
  }
}
