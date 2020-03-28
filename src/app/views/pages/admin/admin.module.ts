import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../../partials/partials.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CoreModule } from '../../../core/core.module';
import { QuanlytaikhoanComponent } from './quanlytaikhoan/quanlytaikhoan.component';
import { QuanlydoanhsoComponent } from './quanlydoanhso/quanlydoanhso.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { Role } from '../../../my_core/models/role.enum';
import { ManagerRolesComponent } from './quanlytaikhoan/manager-roles/manager-roles.component';
import { QuanlytaikhoanModule } from './quanlytaikhoan/quanlytaikhoan.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatSelectModule, MatMenuModule, MatInputModule, MatTableModule, MatAutocompleteModule, MatRadioModule, MatIconModule, MatNativeDateModule, MatProgressBarModule, MatDatepickerModule, MatCardModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatProgressSpinnerModule, MatSnackBarModule, MatExpansionModule, MatTabsModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'quanlytaikhoan',
        pathMatch: 'full',
      },
      {
        path: 'quanlytaikhoan',
        component: QuanlytaikhoanComponent,
      },
      {
        path: 'quanlydoanhso',
        component: QuanlydoanhsoComponent
      },
      {
        path: 'thongke',
        component: ThongkeComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
		HttpClientModule,
		PartialsModule,
		RouterModule.forChild(routes),
    QuanlytaikhoanModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
  ],
  declarations: [
    AdminComponent,
    QuanlytaikhoanComponent,
    QuanlydoanhsoComponent,
    ThongkeComponent,
    ManagerRolesComponent,
  ]
})
export class AdminModule { }
