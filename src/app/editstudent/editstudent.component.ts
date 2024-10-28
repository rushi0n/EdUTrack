import { Component } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css'],
})
export class EditstudentComponent {
  constructor(private ser: StudentserviceService, private fb: FormBuilder,public router :Router) {}
  steditform!: FormGroup;
  singleStudent: any;
  ngOnInit() {
    this.steditform = this.fb.group({
      id: [],
      name: [],
      marks: [],
    });
    this.editStudent()
  }

  editStudent() {
    let sid = localStorage.getItem('sid');

    this.ser.getsingleStudent(sid).subscribe((s: any) => {
      this.singleStudent = s;

      this.steditform.patchValue({
        id: this.singleStudent.id,
        name: this.singleStudent.name,
        marks: this.singleStudent.marks,
      });
    });
    
  }
  updateStudent(){
    this.ser.putStudent(this.steditform.value).subscribe()
    this.router.navigateByUrl('student/views')
    localStorage.clear()
  }
  
}
