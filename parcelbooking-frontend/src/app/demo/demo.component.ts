import { Component } from '@angular/core';
import { Parcel } from '../model/parcel';
import { Parcel2 } from '../model/parcel2';
import { ParcelService } from '../service/parcel.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  submits=false;
  uname= localStorage.getItem('uname') ?? '';
  parcels:Parcel2[]=[];
  parcelone:Parcel2;
  submitted = false;
  constructor(private parcelservice:ParcelService){
    this.parcelservice.getParcelByUsername(this.uname).subscribe(data=>{this.parcels=data});
    console.log(this.parcels);
  }

  showdata(){

      this.submits=true;
      
  }
  
}
