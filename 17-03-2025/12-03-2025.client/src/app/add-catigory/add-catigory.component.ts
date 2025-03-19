import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-add-catigory',
  standalone: false,
  templateUrl: './add-catigory.component.html',
  styleUrl: './add-catigory.component.css'
})
export class AddCatigoryComponent {
  constructor(private _http: AuthServiceService) { }

  categories: any;

  ngOnInit() {

  }


  AddCatigory(data: any) {
    this._http.PostNewCatigory(data).subscribe(() => {
      alert("New catigory is added seccessufly");
    })
  }
}
