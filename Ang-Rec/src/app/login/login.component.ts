import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()  login : boolean | undefined;

  constructor( private router : Router ) { }

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

  onSubmit(value:any){
    console.log(value)
    this.userData.forEach((element:any) => {
      if(element.Email.includes(value.Email)&& element.Password.includes(value.Password)){
        this.login = false
        this.router.navigate(['/Dashboard'])
      }
    });
  }
}
