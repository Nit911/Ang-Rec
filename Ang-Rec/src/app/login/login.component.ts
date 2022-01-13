import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData : any = [
    {
      "Name":"user1",
      "Email":"user1@data.com",
      "Password":"user1",
      "City":"city1"
    },
    {
      "Name":"user2",
      "Email":"user2@data.com",
      "Password":"user2",
      "City":"city2"
    },{
      "Name":"user3",
      "Email":"user3@data.com",
      "Password":"user3",
      "City":"city3"
    },{
      "Name":"user4",
      "Email":"user4@data.com",
      "Password":"user4",
      "City":"city4"
    },{
      "Name":"user5",
      "Email":"user5@data.com",
      "Password":"user5",
      "City":"city5"
    }
  ]

  value: any;

  onSubmit(value:any){
    if(this.value.Email == this.userData.Email){
      console.log(value.Email, value.Passwords)
      if(this.value.Password == this.userData.Password){
        console.log(value.Email, value.Passwords)
      }
    }
  }
  
  dashboard(){

  }

}
