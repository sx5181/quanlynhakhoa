import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlytaikhoanComponent } from './quanlytaikhoan.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './manager-users/user-list/user-list.component';
import { PortletModule } from '../../../../views/partials/content/general/portlet/portlet.module';
import { HttpClientModule } from '@angular/common/http';
import { PartialsModule } from '../../../../views/partials/partials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule, MatMenuModule, MatSelectModule, MatInputModule, MatTableModule, MatAutocompleteModule, MatRadioModule, MatIconModule, MatNativeDateModule, MatProgressBarModule, MatDatepickerModule, MatCardModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatProgressSpinnerModule, MatSnackBarModule, MatExpansionModule, MatTabsModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { BaseComponent } from '../../../../views/theme/base/base.component';
import { UserEditComponent } from './manager-users/user-edit/user-edit.component';
import { DialogCreateEditComponent } from './manager-users/dialogs/dialog-create-edit/dialog-create-edit.component';
// import { PortletHeaderComponent } from '../../../../views/partials/content/general/portlet/portlet-header.component';

const routes: Routes = [
	{
		path: '',
		component: QuanlytaikhoanComponent,
		children: [
			{
				path: '',
				redirectTo: 'quanlytaikhoan/manager-user/list',
				pathMatch: 'full'
			},
			{
				path: 'quanlytaikhoan/manager-user/list',
				component: UserListComponent
			},
			{
				path: 'quanlytaikhoan/manager-user/edit/:id',
				component: UserEditComponent
			},
			{
				path: 'quanlytaikhoan/manager-user/add',
				component: UserEditComponent
			}
		]
	}
];


@NgModule({
	declarations: [UserListComponent, UserEditComponent, DialogCreateEditComponent],
	entryComponents: [DialogCreateEditComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		PartialsModule,
		PortletModule,
		RouterModule.forChild(routes),
		// EffectsModule.forFeature([UserEffects]),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,

	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuanlytaikhoanModule { }
