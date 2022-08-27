import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AddNewTaskPage } from './add-new-task/add-new-task.page';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) { 

    addTask(){

    }

    deleteTask(){


    }

    updateTask(){

    }

    getAllTasks(){

    }

  }
}
