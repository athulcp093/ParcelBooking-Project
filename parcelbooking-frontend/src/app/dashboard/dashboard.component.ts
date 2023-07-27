import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parcel } from '../model/parcel';
import { Parcel2 } from '../model/parcel2';
import { Tracking } from '../model/tracking';
import { ParcelService } from '../service/parcel.service';
import { TrackinghubService } from '../service/trackinghub.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  sendername:string;
  recievername:string;
  senderaddress:string;
  recieveraddress:string;
  recieverPhno:number;
  username:string;
  parcel1:Parcel;
  tracks:Tracking;
  // parcel2:Parcel;
  submitted = false;
  submits=false;
  submitsss=false;
  successMessage: string;
  uname:string;
  id:number;
  ids:number;

  unam= localStorage.getItem('uname') ?? '';
  parcels:Parcel2[]=[];
  

  constructor(private parcelservice:ParcelService, private router:Router,private trackinghubservice:TrackinghubService){
    this.parcelservice.getParcelByUsername(this.unam).subscribe(data=>{this.parcels=data});
    console.log(this.parcels);
  }

   add(){
     this.submitted = true;
     const uname= localStorage.getItem('uname') ?? '';
     this.parcel1= {sendername:this.sendername,recievername:this.recievername,senderaddress:this.senderaddress,recieveraddress:this.recieveraddress,recieverPhno:this.recieverPhno,username:uname};
     console.log(this.parcel1); 
     this.parcelservice.addParcel(this.parcel1).subscribe(data=>{
      
      this.successMessage = 'Parcel added successfully';
       
      console.log("hello"); 
     },
     error=>{
      console.log('error');
     });
     
    }

    search(){
      
        this.submits=true;
        const result = this.parcelservice.getParcelById(this.id).subscribe(data=>{this.parcel1=data});
        console.log(this.parcel1);
      // this.router.navigate(['/home']);
    }
    track(){
      this.submitsss=true;
      const result= this.trackinghubservice.getTrackingInfoByParcelId(this.ids).subscribe(data=>{this.tracks=data});
    }
}
