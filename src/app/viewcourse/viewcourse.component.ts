import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  course:any
  constructor(private cur:CourseService,private router:Router){
    this.cur.getcourse().subscribe((c:any)=>
      {
        this.course=c
      })
  }
  delcourse(cid:any){
    this.cur.deleteCourse(cid).subscribe()
    window.location.reload()
  }

  editcourse(cdid:any){
    localStorage.setItem('curid',cdid)
this.router.navigateByUrl("course/editcourse")
  }
}
