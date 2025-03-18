import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service'
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  ProductI: any
  CatigoryProducts: any
  Products: any
  constructor(private _http: AuthServiceService, private Activep: ActivatedRoute) { }

  ngOnInit() {
    this.getCatPRoducts();
    this.getProducts();
  }

  getCatPRoducts() {
    this.ProductI = this.Activep.snapshot.paramMap.get('id');
    this._http.getCatPRoduct().subscribe((data) => {
      this.CatigoryProducts = data.filter((Products: any) => Products.categoryId == this.ProductI);
    })
  }

  getProducts() {
    this._http.getAllProducts().subscribe((data) => {
      this.Products = data;
    })
  }




}
