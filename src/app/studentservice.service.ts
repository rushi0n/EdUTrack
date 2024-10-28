import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(public http:HttpClient) { }

  getallStudent(){
   return this.http.get("http://localhost:3000/student")
  }

  postStudent(s:any){
   return this.http.post("http://localhost:3000/student",s)
  }

  deleteStudent(sid:any){
    return this.http.delete("http://localhost:3000/student/"+sid)
  }

  putStudent(sid:any){
    return this.http.put("http://localhost:3000/student/"+sid.id,sid)
  }
  getsingleStudent(c2id:any){
    return this.http.get("http://localhost:3000/student/"+c2id)
  }
}
