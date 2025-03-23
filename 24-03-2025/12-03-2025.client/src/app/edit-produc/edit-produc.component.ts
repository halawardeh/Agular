import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produc',
  standalone: false,
  templateUrl: './edit-produc.component.html',
  styleUrl: './edit-produc.component.css'
})
export class EditProducComponent {

  product: any

  constructor(private _ser: AuthServiceService, private _http: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const Product_id = this._http.snapshot.paramMap.get("id");
    this._ser.getAllProducts().subscribe((data) => {
      this.product = data.find((router: any) => router.id == Product_id)
    })
  }

  UpdateProduct(data: any) {
    this._ser.UpdateProduct(this.product.id, this.product).subscribe(() => {
      alert("Product Updated Succsessfuly!");
      this.router.navigate(['/app-product'])
    })
  }
}
