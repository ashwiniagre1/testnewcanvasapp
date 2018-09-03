/**
 * Created by: deepali arvind
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { GetState } from './../../models/getstate.model'
@Component(
{
	selector: 'getstatedata',
	templateUrl: 'getstatedata.component.html'
})
export class GetstatedataComponent implements OnInit
{
	
	getState: GetState;
	
	stateId_Data:any;
	successMsgData:any[]=[];
	
	constructor(private stateService: StateService, private router: Router)
	{
		this.getState = new GetState();
		
		this.stateId_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_countryId(eventData:any)
	{ 
		let response: any;
		this.stateService.findbycountryid(this.getState.countryId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryIdBindResponse_1(response);
		});
	}
	countryIdBindResponse_1(response: any)
	{
		this.successMsgData.push(this.getState.stateId+' '+response.message);
		
		this.stateId_Data=response.response;
		
	} 
	
	
}

