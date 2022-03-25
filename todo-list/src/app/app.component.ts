import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .invisible {
        display: none;
      }
    `,
  ],
})

export class AppComponent {

  tasks: Array<Task> = [
    {id: 1, name: "Go to shop"},
    {id: 2, name: "Go to cinema"}
  ]

  checkTasks: Array<Task> = []

  idTask = 3;
  addTask(myForm: NgForm): void{
    this.tasks.push({id: this.idTask, name: myForm.value.task});
    this.idTask ++;
  }

  idCheckTask = 1;
  addCheckTask(id: number): void{
    this.tasks.forEach(task => {
      if (task.id === id)
      {
        this.checkTasks.push({id: this.idCheckTask, name: task.name});
      }
    });
    this.idCheckTask ++;
  }

  onDeleteCheckTask(id: number): void{
    this.checkTasks = this.checkTasks.filter(checkTasks => checkTasks.id != id)
  }

  onDelete(id: number): void{
    this.tasks = this.tasks.filter(task => task.id != id)
  }

  visibility: boolean = true;
  smena(): void{
    this.visibility = !this.visibility;
  }
}
export interface Task {
  id: number;
  name: string;
}