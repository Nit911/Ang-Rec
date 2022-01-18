import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  userData : any = []

  value: any = []

  onSubmit(value:any){
    this.userData.push(value)
    console.log(value)
    value = null
    alert("Registration is Successful")
    this.router.navigate(['/Login'])
  }
}
