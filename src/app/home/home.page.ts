import { Component } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { UpdateTaskPage } from '../update-task/update-task.page';
import { TodoService } from '../todo.service';
import { logging } from 'protractor';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile = null;
  todoList = []

  today : number = Date.now()

  constructor(
    public modalCtrl:ModalController,
    public todoService:TodoService,
    private authService:AuthService,
    private router:Router,
    private loadingController:LoadingController,
    private alertController:AlertController
     ) {
    this.getAllTask()
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl:true})
  }

  async addNewItem(){
     const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
     })

     modal.onDidDismiss().then(newTask => {
      this.getAllTask()
     })
     return await modal.present()
  }
  
  getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    //console.log(this.todoService.getAllTasks())
  
  }

  delete(key){
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask){
    const modal = await this.modalCtrl.create({
      component: UpdateTaskPage,
      componentProps: {task: selectedTask}
    })
    
    modal.onDidDismiss().then(newTask => {
      this.getAllTask()
     })
    
    return await modal.present()
  }

}
