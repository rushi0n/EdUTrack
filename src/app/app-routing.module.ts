import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { CourseComponent } from './course/course.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoginsuccesspageComponent } from './loginsuccesspage/loginsuccesspage.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'adds',
        component: AddstudentComponent,
      },
      {
        path: 'editform',
        component: EditstudentComponent,
      },
      {
        path: 'views',
        component: ViewstudentComponent,
      },
    ],
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {
        path: 'addc',
        component: AddcourseComponent,
      },
      {
        path: 'viewc',
        component: ViewcourseComponent,
      },
      {
        path: 'editcourse',
        component: EditcourseComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomepageComponent,
  },{
path:'loginsuccess',component:LoginsuccesspageComponent
  },
  {
    path: 'login',
    component: LoginpageComponent,
  }, {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
