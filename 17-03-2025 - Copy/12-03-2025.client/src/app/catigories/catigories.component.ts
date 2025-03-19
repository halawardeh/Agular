import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-catigories',
  standalone: false,
  templateUrl: './catigories.component.html',
  styleUrl: './catigories.component.css'
})
export class CatigoriesComponent {

  constructor(private _http: AuthServiceService) { }

  categories: any;

  ngOnInit() {
    this.GetCatProducts();
  }

  GetCatProducts() {
    return this._http.getAllCatigories().subscribe((data) => {
      this.categories = data;
    });
  }

  AddCatigory(data: any) {
    this._http.PostNewCatigory(data).subscribe(() => {
      alert("New catigory is added seccessufly");
    })
  }

}
