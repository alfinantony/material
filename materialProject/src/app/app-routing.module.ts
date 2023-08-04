import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { LeadComponent } from './lead/lead.component';





const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'add-employee',component:AddEmployeesComponent
  },
  {
    path:'lead',component:LeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
