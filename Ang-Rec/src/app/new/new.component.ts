import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value : any

  title : any = "New Component is working"

  // onSubmit(value:any){
  //   console.log(value)
  // }

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
  
  onClick(value:any){
    value = this.title
  }

  onSubmit(text:any){
    this.userDetails.push(text)
    text = null    
  }
}
