import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parcel2 } from '../model/parcel2';
import { Tracking } from '../model/tracking';

@Injectable({
  providedIn: 'root'
})
export class TrackinghubService {

  private baseURL = "http://localhost:8099/tracking";

  constructor(private httpClient:HttpClient) {}

  getAllParcels(): Observable<Parcel2[]>{
    return this.httpClient.get<Parcel2[]>(`${this.baseURL}/parcels`);
  }
  addHubs(track:Tracking): Observable<Tracking>{
    return this.httpClient.post<Tracking>(`${this.baseURL}/add`,track);
  }
  getTrackingInfoByParcelId(id:number):Observable<Tracking>{
    return this.httpClient.get<Tracking>(`${this.baseURL}/getByParcelId/${id}`);
  }
  
}
