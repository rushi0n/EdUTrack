import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(public http: HttpClient) {}

  getcourse() {
    return this.http.get('http://localhost:3000/course');
  }

  postCourse(couid: any) {
    return this.http.post('http://localhost:3000/course', couid);
  }
  deleteCourse(crid: any) {
    return this.http.delete('http://localhost:3000/course/' + crid);
  }

  getsinglecourse(c2id:any){
    return this.http.get("http://localhost:3000/course/"+c2id)
  }

  putCourse(coid: any) {
    return this.http.put('http://localhost:3000/course/' + coid.id, coid);
  }
}
