import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  name = '';
  password = '';
 
  constructor(private url: AuthServiceService) {

  }
  ngOnInit() {

  }
  postData(data: any) {
    this.url.PostNewUser(data).subscribe(() => {
      alert("New User is Added!");
    })
  }
 
}
