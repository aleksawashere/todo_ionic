import { Component } from '@angular/core';

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
  constructor() {}

}
