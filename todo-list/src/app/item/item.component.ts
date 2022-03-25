import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{
  @Input() text?: string;
  @Input() id?: number;  
  @Output() onDeleteTask = new EventEmitter();
  @Output() addCheckTask = new EventEmitter();

  addCheck(): void{
    this.addCheckTask.emit(this.id as number);
  }
  delete(): void{
    this.onDeleteTask.emit(this.id as number);
  }
}
