import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  edit(userDetails:any){
    userDetails.isEdit = true
  }
  
  cancel(userDetails:any){
    userDetails.isEdit = false
  }

  save(userDetails:any){
    // userDetails.Name = this.userDetails.Name
    // userDetails.Email =this.userDetails.Email
    // userDetails.City = this.userDetails.City
    // console.log(userDetails)
    userDetails.isEdit = false
    alert("Successfully updated")
  }
  
  userDetails : any = [
    {
      "Name":"user1",
      "Email":"user1@data.com",
      "Password":"user1",
      "City":"city1",
      "isEdit":false
    },
    {
      "Name":"user2",
      "Email":"user2@data.com",
      "Password":"user2",
      "City":"city2",
      "isEdit":false
    },{
      "Name":"user3",
      "Email":"user3@data.com",
      "Password":"user3",
      "isEdit":false,
      "City":"city3"
    },{
      "Name":"user4",
      "Email":"user4@data.com",
      "Password":"user4",
      "isEdit":false,
      "City":"city4"
    },{
      "Name":"user5",
      "Email":"user5@data.com",
      "Password":"user5",
      "isEdit":false,
      "City":"city5"
    }
  ]
  
  value : any = []

  updateTable(value:any){
    console.log(value)
    let userDetail = value;
    userDetail.isEdit = false;
    this.userDetails.push(userDetail)
    value = null    
  }

  onLogoff(){
    alert("Logging Off")
    this.router.navigate(['/Login'])
  }
}
