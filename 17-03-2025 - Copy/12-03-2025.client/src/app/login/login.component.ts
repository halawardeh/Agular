import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private url: AuthServiceService) {

  }

  ngOnInit() {

  }
  usersData:any
  getData(interedUser:any) {
    this.url.getAllUsers().subscribe((data:any) => {
      let user = this.usersData = data.find((p: any) => p.Email == interedUser.Email && p.password== interedUser.password);
      console.log("Fetched Users:", data);

      if (user) {
        alert("Logged seccussfully!")
      }
      else {
        alert("Invalid User Data")
      }
    })
  }

}
