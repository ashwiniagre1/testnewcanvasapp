/**
 * 
 * Date: 03/09/2018	
 */
export class Department
{
	
	private _Id: string;
	private _name: string;
	
	constructor() { 
	}
	
	set Id(value: string) {
		this._Id = value;
	}
	get Id() : string {
		return this._Id;
	}
	set name(value: string) {
		this._name = value;
	}
	get name() : string {
		return this._name;
	}
	
}
