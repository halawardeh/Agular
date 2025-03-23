import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-edit-catigory',
  standalone: false,
  templateUrl: './edit-catigory.component.html',
  styleUrl: './edit-catigory.component.css'
})
export class EditCatigoryComponent {


  CatContainer:any
  catID: any
  constructor(private _http: AuthServiceService, private Active: ActivatedRoute, private router:Router) { }

  ngOnInit(data: any) {
    this.catID = this.Active.snapshot.paramMap.get("id");
    this._http.GetCatByID(this.catID).subscribe((data) => {
      this.CatContainer=data
    })
  }
  UpdataCatigory(data:any) {
    this.catID = this.Active.snapshot.paramMap.get("id");
    this._http.UpdataCat(this.catID,data).subscribe(() => {
      alert("This Catigory is updated successfully!");
      this.router.navigate(['/app-catigories']);
    })
  }

}
