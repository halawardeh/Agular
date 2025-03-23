import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}


