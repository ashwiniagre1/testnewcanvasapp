/**
 * 
 * Date: 03/09/2018	
 */
export class GetState
{
	
	private _countryId: string;
	private _stateId: string;
	
	constructor() { 
	}
	
	set countryId(value: string) {
		this._countryId = value;
	}
	get countryId() : string {
		return this._countryId;
	}
	set stateId(value: string) {
		this._stateId = value;
	}
	get stateId() : string {
		return this._stateId;
	}
	
}
