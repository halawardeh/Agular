import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  template: `<button (click)="sendMessage()">اضغط لإرسال رسالة</button>`

})
export class Child2Component {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hala");
  }
}

