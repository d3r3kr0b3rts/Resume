import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { EmploymentComponent } from './pages/employment/employment.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'employment', component: EmploymentComponent},
  {path: '**', component: ErrorComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
