import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private _http: ActivatedRoute, private url: AuthServiceService) {
  }

  ngOnInit() {
    this.getUserData();
  }
  usersData: any
  getUserData() {
    const User_id = this._http.snapshot.paramMap.get("id");
    this.usersData = this.url.ViewUser(User_id).subscribe((data) => {
      this.usersData = data;
    })
  }



}
