import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/app.component';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  @Input() task?: Task; 
  @Output() onDeleteTask = new EventEmitter();

  delete(): void{
    this.onDeleteTask.emit(this.task!.id as number);
  }
}