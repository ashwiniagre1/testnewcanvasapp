import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;
	
  constructor(private _router : Router){    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Department","routerLink":"testnewcanvasapp/core/department","selected":false},{"text":"DepartmentList","routerLink":"testnewcanvasapp/core/departmentlist","selected":false},{"text":"GetStateData","routerLink":"testnewcanvasapp/core/getstatedata","selected":false}]}]; }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
