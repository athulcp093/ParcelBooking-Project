import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcel } from '../model/parcel';
import { Parcel2 } from '../model/parcel2';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

private baseURL = "http://localhost:8098/parcels";
// private url=`http://localhost:8098/parcels/getallbyname/${username}`;

  constructor(private httpClient: HttpClient) { }

  addParcel(parcel:Parcel): Observable<Parcel>{
      console.log("hai")
      console.log(parcel);
     return this.httpClient.post<Parcel>(`${this.baseURL}/add`,parcel);
  }
  getParcelById(id:number): Observable<Parcel>{
      return this.httpClient.get<Parcel>(`${this.baseURL}/getbyid/${id}`);
  }
  getParcelByUsername(username:string): Observable<Parcel2[]>{
      // return this.httpClient.get<Parcel2[]>('/api/getallbyname',{ params: { username } });
      return this.httpClient.get<Parcel2[]>(`${this.baseURL}/getallbyname/${username}`);
  }
  

}
