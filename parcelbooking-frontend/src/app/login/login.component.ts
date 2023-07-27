import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';
import { Customer } from '../model/Customer';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  customername: string;
  password: string;
  AppserviceService: any;
  user:Customer;
  constructor(private userservice:UserService, private router: Router) { }

  //  constructor() {}
   

  login() {
    // Perform authentication or validation logic here
    // For simplicity, let's assume login is successful
    // this.user = new Customer();
    
    this.userservice.getCustomerByname(this.customername).subscribe(data=>{
      this.user=data; console.log(this.user);
    })

    localStorage.setItem('uname',this.customername);
    const uname= localStorage.getItem('uname') ?? '';
    console.log(uname);
    this.router.navigate(['/home']);
    // this.sharedService.arr.push(this.username);
    
     
    // if (this.username === 'admin' && this.password === 'password') {
    //   this.router.navigate(['/home']);
    // }
  
  }
}
