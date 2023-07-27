import { Component } from '@angular/core';
import { Customer } from '../model/Customer';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {

  user:Customer[]=[];
    constructor(private userservice:UserService){
      this.userservice.getProductList().subscribe(data=>{this.user=data});
      console.log(this.user);
        // this.user=this.userservice.user;
    }
}
