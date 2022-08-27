import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  todoList = [
    {
      itemName: 'Coding',
      itemDueDate: '10-13-21',
      itemPriority: 'high',
      itemCategory: 'Work'
    },
    {
      itemName: 'Painting',
      itemDueDate: '10-28-21',
      itemPriority: 'low',
      itemCategory: 'Personal'
    },
    {
      itemName: 'Shopping',
      itemDueDate: '10-30-21',
      itemPriority: 'middle',
      itemCategory: 'Personal'
    },
    {
      itemName: 'Design',
      itemDueDate: '10-20-21',
      itemPriority: 'high',
      itemCategory: 'Work'
    },
    {
      itemName: 'Drink with friends',
      itemDueDate: '10-17-21',
      itemPriority: 'low',
      itemCategory: 'Personal'
    },
]

  today : number = Date.now()
  constructor(public modalCtrl:ModalController) {}

  async addTask(){
     const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
     })

     return await modal.present()
  }
  

}
