import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData : any = []

  onSubmit(value:any){
    console.log(value)
    this.userData = this.userData.push(value)
  }

}
