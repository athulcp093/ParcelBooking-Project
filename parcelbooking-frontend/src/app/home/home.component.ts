import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ar: string[];

  // constructor(private appserviceService: AppserviceService, private router: Router) { }
 
  ngOnInit() {
    
  //   this.ar= this.appserviceService.arr;
  //   console.log(this.appserviceService.arr);
    //  console.log(localStorage);
    
  }
  // show(){
  //   this.router.navigate(['/profile']);
  // }
}
