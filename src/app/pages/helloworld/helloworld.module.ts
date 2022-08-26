import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelloworldPageRoutingModule } from './helloworld-routing.module';

import { HelloworldPage } from './helloworld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelloworldPageRoutingModule
  ],
  declarations: [HelloworldPage]
})
export class HelloworldPageModule {}
