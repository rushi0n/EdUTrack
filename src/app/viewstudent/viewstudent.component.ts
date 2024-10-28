import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})

export class ViewstudentComponent {
  stud:any
  constructor(private ser:StudentserviceService,private router:Router){

      this.ser.getallStudent().subscribe((s=>{
        this.stud=s
      }))
        }

        delStudent(id:any){
          if(confirm("Are you sure you want delete...")){
            this.ser.deleteStudent(id).subscribe()
            window.location.reload()
          }
         
        }
        updateStudent(id:any){
           localStorage.setItem("sid",id)
          this.router.navigateByUrl('student/editform')
          console.log(id)
        }
  }

  
 


