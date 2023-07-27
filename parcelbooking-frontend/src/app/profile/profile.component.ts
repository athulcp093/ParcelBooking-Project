import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private userservice:UserService,private router:Router) {} 

    address:string;
    customername:string;
    password:string;
    phoneno:number;
    user1:Customer;
    submitted = false;
    successMessage: string;
    
     add(){
      //  console.log(this.user1.id,this.user1.name,this.user1.ph);
        this.submitted = true;
         this.user1= {customername:this.customername,password:this.password,address:this.address,phoneno:this.phoneno};
        //  this.userservice.user.push(this.user1);
         this.userservice.create(this.user1).subscribe(data=>{
          this.successMessage = 'Customer created successfully';
            console.log(data);
            this.submitted = false;
         },error=>{
           console.log('error');
         });
         
        //  console.log(this.userservice.user);
        //  this.router.navigate(['/userdata']);
     }

    
}
