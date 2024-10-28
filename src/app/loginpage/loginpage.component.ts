import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
lgn:any
  constructor(private ser:StudentserviceService,private fb:FormBuilder,private router:Router){ }
  ngOnInit(){
    this.lgn=this.fb.group({
      id:[],
      password:[]
    })
  }

  
  login(){
    if(this.lgn.controls['id'].value==null){
      alert("Enter valid Username and Password....")
      this.router.navigateByUrl('login')
    }else{
      let stid=this.lgn.controls['id'].value
      localStorage.setItem("stuid",stid)
      this.router.navigateByUrl('loginsuccess')
    }

  }

}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

