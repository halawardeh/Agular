import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  viewVaouchers(): Observable<any>{
    return this.http.get('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher');
  }

  AddVoucher(data:any):Observable<any> {
    return this.http.post('https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher', data)
  }

  EditVoucher(id:any, data:any) {
    return this.http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`,data)
  }
  deleteVoucher(id: any) {
    return this.http.delete(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }

  GetCatByID(id:any){
    return this.http.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }
  UpdataCat(id: any, data: any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data);
  }
  UpdateProduct(id:any , data:any) {
    return this.http.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data);
  }

  PostNewCatigory(data:any):Observable<any> {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories',data);
  }

  PostNewProduct(data: any):Observable<any> {
    return this.http.post('https://67cd64b6dd7651e464ee3d63.mockapi.io/products', data);
  }

  getAllCatigories(): Observable<any> {
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories');
  }

  getAllProducts() : Observable<any>{
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/products');
  }

  PostNewUser(data:any): Observable<any> {
    
    return this.http.post('https://67cea6ee125cd5af757b6514.mockapi.io/Users',data)
  }

  getAllUsers(): Observable<any> {

    return this.http.get('https://67cea6ee125cd5af757b6514.mockapi.io/Users')
  }
  ViewUser(id: any): Observable<any>{
    return this.http.get(`https://67cea6ee125cd5af757b6514.mockapi.io/Users/${id}`);
  }

  getCatPRoduct(): Observable<any> {
    return this.http.get('https://67cd64b6dd7651e464ee3d63.mockapi.io/products')
  }
}
