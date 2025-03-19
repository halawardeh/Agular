import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  receivedMessage: string = '';
  showChild: boolean = false; // Child is hidden by default

  toggleChild() {
    this.showChild = !this.showChild; // Toggle between showing and hiding the child
  }

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
