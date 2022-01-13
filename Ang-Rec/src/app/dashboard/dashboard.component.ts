import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edit(userDetail:any){
    userDetail.isEdit = true
  }
  
  cancel(userDetail:any){
    userDetail.isEdit = false
  }

  save(userDetail:any){
    userDetail.isEdit = false
    alert("Update is Successful")
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

  onSubmit(value:any){
    console.log(value)
    this.userDetails  = this.userDetails.push(value)
  }

}
