import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentlistComponent } from './components/departmentlist/departmentlist.component';
import { GetstatedataComponent } from './components/getstatedata/getstatedata.component';
import { DepartmentService } from './services/department.service';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	  DepartmentComponent,
	  DepartmentlistComponent,
	  GetstatedataComponent,
	  ],
	  providers: [
	DepartmentService,
	CountryService,
	StateService,
	  ]
})
export class CoreModule {
}
