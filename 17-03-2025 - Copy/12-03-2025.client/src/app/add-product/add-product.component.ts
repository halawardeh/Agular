import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
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
  AddNewProduct(data:any) {
    this._http.PostNewProduct(data).subscribe(() => {
      alert("New Product is added!");
    })
  }

}
