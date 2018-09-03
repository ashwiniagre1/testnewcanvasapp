/**
 * Created by: deepali arvind
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from './../../models/department.model'
@Component(
{
	selector: 'department',
	templateUrl: 'department.component.html'
})
export class DepartmentComponent implements OnInit
{
	
	Department: Department;
	
	_rootpane:any;
	successMsgData:any[]=[];
	
	constructor(private departmentService: DepartmentService, private router: Router)
	{
		this.Department = new Department();
		
	}
	ngOnInit()
	{
		this.onLoad_rootpane();
	}
	
	onLoad_rootpane(){ 
		this.successMsgData.push('testing');
		
		
	} 
	onClick_save(eventData:any)
	{ 
		let response: any;
		
		this.departmentService.save(this.Department).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.saveBindResponse_1(response);
		});
	}
	saveBindResponse_1(response: any)
	{
		this.router.navigate(['testnewcanvasapp/core/departmentlist']);
		this.successMsgData.push('data saved successfully!');
		
		
	} 
	
	
}

