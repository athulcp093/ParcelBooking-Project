import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './model/Customer';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  // private value!: string;
 
   arr: string[]=[];
  //  constructor(){ }
 
  //  getdata(){
  //    return this.arr;
  //  }
  
  private baseURL="http://localhost:8089/customer";
  constructor(private httpClient:HttpClient){}

  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}/retrieve/getall`);
  }
  add(customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/add`,customer);
  }
  getCustomerById(customer_id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/get/${customer_id}`);
  }
  // updateCustomer(customer_id:number,customer:Customer):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/update`,customer);
  // }
  // deleteCustomer(customer_id:number):Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/delete/${customer_id}`);
  // }
}
