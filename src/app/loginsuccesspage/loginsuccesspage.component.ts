import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-loginsuccesspage',
  templateUrl: './loginsuccesspage.component.html',
  styleUrls: ['./loginsuccesspage.component.css']
})
export class LoginsuccesspageComponent {
  student:any
constructor(private stu:StudentserviceService,){
  let sid=localStorage.getItem("stuid")
  stu.getsingleStudent(sid).subscribe((s:any)=>{
this.student=s
localStorage.clear()
  })
}


}
