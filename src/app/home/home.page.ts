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
      itemDueDate: '13-10-21',
      itemPriority: 'high',
      itemCategory: 'Work'
    },
    {
      itemName: 'Painting',
      itemDueDate: '28-10-21',
      itemPriority: 'low',
      itemCategory: 'Personal'
    },
    {
      itemName: 'Shopping',
      itemDueDate: '30-10-21',
      itemPriority: 'middle',
      itemCategory: 'Personal'
    },
]

  today : number = Date.now()
  constructor() {}

}
