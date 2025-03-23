import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  showChild: boolean = false; // Child is hidden by default
  name:string=''
  toggleChild() {
    this.showChild = !this.showChild; // Toggle between showing and hiding the child
  }

  receiveMessage(message: string) {
    this.name = message;
  }
}
