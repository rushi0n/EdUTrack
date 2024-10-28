import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  constructor(private cur:CourseService,private fb:FormBuilder){}
courseform!:FormGroup
  ngOnInit(){
this.courseform=this.fb.group({
  cid:[],
  cname:[],
  fees:[]
})
  }

  addcourse(){
    this.cur.postCourse(this.courseform.value).subscribe()
    window.location.reload()
  }

}
