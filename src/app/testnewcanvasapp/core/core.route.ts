
import {Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentlistComponent } from './components/departmentlist/departmentlist.component';
import { GetstatedataComponent } from './components/getstatedata/getstatedata.component';
export const ROUTES: Routes = [
{
	    path: 'department', component: DepartmentComponent
},
{
	    path: 'departmentlist', component: DepartmentlistComponent
},
{
	    path: 'getstatedata', component: GetstatedataComponent
},
];

