import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloworldPage } from './helloworld.page';

const routes: Routes = [
  {
    path: '',
    component: HelloworldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloworldPageRoutingModule {}
