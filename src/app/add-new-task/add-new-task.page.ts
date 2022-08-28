import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = []
  categorySelectedCategory

  newTaskObj={}
  itemName
  itemDueDate
  itemPriority
  itemCategory

  constructor(public modalCtrl:ModalController, public todoService:TodoService) { }

  ngOnInit() {
    this.categories.push('work')
    this.categories.push('personal')
  }

  async add(){
    this.newTaskObj = (
      {
        itemName:this.itemName,
        itemDueDate: this.itemDueDate,
        itemPriority:this.itemPriority,
        itemCategory: this.categorySelectedCategory
      }
    )

    console.log(this.newTaskObj);
    

    let uid = this.itemName + this.itemDueDate //most important task informations that combined are key
    
    if(uid){
      await this.todoService.addTask(uid,this.newTaskObj)
    }
    else{
      console.log("Cannot save empty task!")
    }

    this.dismiss()
  }

  selectedCategory(index){
    this.categorySelectedCategory = this.categories[index]
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.newTaskObj)
  }
}
