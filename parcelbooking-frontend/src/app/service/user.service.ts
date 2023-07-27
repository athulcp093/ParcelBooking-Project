import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }

  //  user:Customer[]=[];
    //      {];
   

  // getUser():User[]{
  //    return[
  //      {
  //        id:23,
  //       name:'tgh',
  //       ph:87656},
  //      {
  //       id:64,
  //       name:'sasi',
  //       ph:29876
  //      },
  //      {
  //       id:17,
  //       name:'jose',
  //       ph:98226
  //      } 

  //    ];
  //   }

  private baseURL = "http://localhost:8097/customer";

 

  constructor(private httpClient: HttpClient) { }

 

  getProductList(): Observable<Customer[]>{

    return this.httpClient.get<Customer[]>(`${this.baseURL}/getall`);

  }

 

  create(customer: Customer): Observable<Customer>{

    return this.httpClient.post<Customer>(`${this.baseURL}/add`, customer);

  }

 

  getProductById(customerid: number): Observable<Customer>{

    return this.httpClient.get<Customer>(`${this.baseURL}/get/${customerid}`);

  }
  getCustomerByname(customername:string): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/getbyname/${customername}`);
  }

 

  // updateProduct( customer: Customer): Observable<Object>{

  //   return this.httpClient.put(`${this.baseURL}/update`, customer);

  // }

 

  // deleteProduct(customer_id: number): Observable<Object>{

  //   return this.httpClient.delete(`${this.baseURL}/delete/${customer_id}`);

  // }
}
