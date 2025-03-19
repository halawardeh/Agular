import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  standalone: false,
  templateUrl: './structure.component.html',
  styleUrl: './structure.component.css'
})
export class StructureComponent {

  display: boolean = true;

  color='o'

  users = [
    { name: "hala", age: 23 },
    {name:"rahaf", age:25}
  ]

}
