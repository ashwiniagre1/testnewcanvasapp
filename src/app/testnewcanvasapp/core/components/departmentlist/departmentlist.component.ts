/**
 * Created by: deepali arvind
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Deptlist } from './../../models/deptlist.model'
@Component(
{
	selector: 'departmentlist',
	templateUrl: 'departmentlist.component.html'
})
export class DepartmentlistComponent implements OnInit
{
	
	deptlist: Deptlist;
	
	
	constructor( private router: Router)
	{
		this.deptlist = new Deptlist();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

