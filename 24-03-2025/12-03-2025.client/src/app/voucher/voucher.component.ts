import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';






@Component({
  selector: 'app-voucher',
  standalone: false,
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {

  voucherContainer:any
  constructor(private _http: AuthServiceService, private _http1: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.ViewAllVouchers();
}

  ViewAllVouchers() {
    return this._http.viewVaouchers().subscribe((data) => {
      this.voucherContainer = data;
    })
  }

  DeleteVoucher(id :any) {
    this.voucherContainer = this._http.deleteVoucher(id).subscribe(() => {
      alert("Voucher is deleted succsessfully!");
      this.router.navigate(['/app-voucher']);
    })
  }
}
