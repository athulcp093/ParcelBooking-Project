import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tracking } from '../model/tracking';
import { TrackinghubService } from '../service/trackinghub.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-trackingstatus',
  templateUrl: './trackingstatus.component.html',
  styleUrls: ['./trackingstatus.component.css']
})

export class TrackingstatusComponent {
onehub:boolean=false;
twohub:boolean=false
threehub:boolean=false
fourhub:boolean=false
hub1:string; hub2:any;hub3:any;hub4:any;hubs:any;
pid:number;
num:any;
val:any;
hubss:string[]=[];
track:Tracking;
constructor(private route: ActivatedRoute,private trackinghubservice:TrackinghubService) {}

ngOnInit() {
  this.route.params.subscribe(params => {
    this.pid = params['id']; // Access the passed data from route parameters
    console.log(this.pid);
  });
}
showhubs(hub1:any){
  this.resetVisibility();
  this.num=this.hubs;
  console.log(this.hubs);
  // console.log(this.hub1);
  if(this.num==="one"){
    this.onehub=true;
    // this.showhub1();
    // this.hubss.push(this.hub1);
    // console.log(this.hubss);
  }
  if(this.num==="two"){
    this.twohub=true;
    
    // console.log(this.hub2);
    // this.hubss.push(this.hub1);
    // this.hubss.push(this.hub2);
    
    // console.log(this.hubss);
  }
  if(this.num==="three"){
    this.threehub=true;
    // this.hubss.push(this.hub1);
    // this.hubss.push(this.hub2);
    // this.hubss.push(this.hub3);
    // console.log(this.hubss);
  } 
  if(this.num==="four"){
    this.fourhub=true;
    // this.hubss.push(this.hub1);
    // this.hubss.push(this.hub2);
    // this.hubss.push(this.hub3);
    // this.hubss.push(this.hub4);
  }   
}
showhub1(){
  console.log(this.hub1);
  this.hubss.push(this.hub1);
}
showhub2(){
  console.log(this.hub1);
  console.log(this.hub2);
  this.hubss.push(this.hub1);
  this.hubss.push(this.hub2);
}
showhub3(){
  console.log(this.hub1);
  console.log(this.hub2);
  console.log(this.hub3);
  this.hubss.push(this.hub1);
  this.hubss.push(this.hub2);
  this.hubss.push(this.hub3);
}
showhub4(){
  console.log(this.hub1);
  console.log(this.hub2);
  console.log(this.hub3);
  console.log(this.hub4);
  this.hubss.push(this.hub1);
  this.hubss.push(this.hub2);
  this.hubss.push(this.hub3);
  this.hubss.push(this.hub4);
}
resetVisibility() {
  this.onehub = false;
  this.twohub = false;
  this.threehub = false;
  this.fourhub = false;
}

add(){

  this.track={parcelId:this.pid,location:this.hubss,currentStatus:this.hub1};
  console.log(this.track);
  console.log(this.hubss);
  this.trackinghubservice.addHubs(this.track).subscribe(data=>{
  //  console.log(this.track);
   
  },
  error=>{
    console.log('error');
   });
}
// track(){
//   this.submitsss=true;
//   const result= this.trackinghubservice.getTrackingInfoByParcelId(this.ids).subscribe(data=>{this.tracks=data});
// }
}
