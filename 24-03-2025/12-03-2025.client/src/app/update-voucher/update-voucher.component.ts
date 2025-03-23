import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-update-voucher',
  standalone: false,
  templateUrl: './update-voucher.component.html',
  styleUrl: './update-voucher.component.css'
})
export class UpdateVoucherComponent {

  voucherContainer: any
  constructor(private _ser: AuthServiceService, private _http: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    const voucherID = this._http.snapshot.paramMap.get("id");
     this._ser.viewVaouchers().subscribe((data) => {
      this.voucherContainer = data.find((router: any) => router.id == voucherID)
     })

  }

  updatevoucher(data: any) {
    this.voucherContainer = this._ser.EditVoucher(this.voucherContainer.id, this.voucherContainer).subscribe(() => {
      alert("Voucher Updated succsessfully!");
      this.router.navigate(['/app-voucher']);
    })
  }

 



}
