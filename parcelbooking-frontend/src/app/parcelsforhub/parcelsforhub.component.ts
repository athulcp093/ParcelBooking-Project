import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parcel2 } from '../model/parcel2';
import { ParcelService } from '../service/parcel.service';
import { TrackinghubService } from '../service/trackinghub.service';

@Component({
  selector: 'app-parcelsforhub',
  templateUrl: './parcelsforhub.component.html',
  styleUrls: ['./parcelsforhub.component.css']
})
export class ParcelsforhubComponent {

  parcels:Parcel2[]=[];
  id:number;
  visible:boolean;
  dispid:number;

  constructor(private trackingservice:TrackinghubService, private router:Router){
    this.trackingservice.getAllParcels().subscribe(data=>{this.parcels=data});
  }
  status(id:number){
      this.router.navigate(['/trackingstatus',id]);

  }
  // status(id:number){
  //      this.visible=true;
  //      this.dispid=id;

  // }
}
