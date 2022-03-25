import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  @Input() text?: string;
  @Input() id?: number;  
  @Output() onDeleteTask = new EventEmitter();

  delete(): void{
    this.onDeleteTask.emit(this.id as number);
  }
}