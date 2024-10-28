import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { StudentserviceService } from '../studentservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent {
  constructor(private ser:StudentserviceService,private fb:FormBuilder){}
  stform!:FormGroup
ngOnInit(){
this.stform=this.fb.group({
  id:[],
  name:[],
  marks:[]
})
}

  saveStudent(){
    if(this.stform.value.id!=null){
      this.ser.postStudent(this.stform.value).subscribe()
      window.location.reload
    }else{
      alert("Enter Some Inputs")
    }

  }

}
