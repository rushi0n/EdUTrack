import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent {
  constructor(
    private cur: CourseService,
    private fb: FormBuilder,
    public router: Router
  ) {}
  creditform!: FormGroup;
  singleCourse: any;
  ngOnInit() {
    this.creditform = this.fb.group({
      id: [],
      cid:[],
      cname: [],
      fees: [],
    });
    this.editCourse();
  }

  editCourse() {
    let cdid = localStorage.getItem('curid');
    console.log(cdid);
    this.cur.getsinglecourse(cdid).subscribe((c:any)=>{
      this.singleCourse=c
      this.creditform.patchValue({
        id:this.singleCourse.id,
        cid: this.singleCourse.cid,
        cname: this.singleCourse.cname,
        fees: this.singleCourse.fees
      })
    })
console.log(this.creditform.value)
      
   
  }
  updateCourse() {
    this.cur.putCourse(this.creditform.value).subscribe();
  
    this.router.navigateByUrl('course/viewc');
  }
}
