import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {

  constructor(private http: AuthServiceService, private active: ActivatedRoute, private router: Router) { }

  ngOnInit() { }

  postNewVoucher(data: any) {
     this.http.AddVoucher(data).subscribe(() => {
       alert("Voucher Added Successfully!");
       this.router.navigate(['/app-voucher']);
     })

  }

}
