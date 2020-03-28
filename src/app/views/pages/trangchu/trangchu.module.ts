// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { TrangchuComponent } from './trangchu.component';



@NgModule({
  imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: TrangchuComponent
			},
		]),
	],
	providers: [],
	declarations: [
		TrangchuComponent,
	]
})
export class TrangchuModule {
}
