import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { InfoComponent } from '../profile/info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MAT_DATE_LOCALE, MatTreeModule, MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule, MatSnackBarModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PartialsModule } from '../../partials/partials.module';
import { KhachhangComponent } from './khachhang.component';
import { ThongtinDoanhsoComponent } from './thongtin-doanhso/thongtin-doanhso.component';
import { DatlichkhamComponent } from './datlichkham/datlichkham.component';
import { ThongtinKhuyenmaiComponent } from './thongtin-khuyenmai/thongtin-khuyenmai.component';
import { DanhsachLienketComponent } from './danhsach-lienket/danhsach-lienket.component';
import { DanhsachCapduoiComponent } from './danhsach-capduoi/danhsach-capduoi.component';
import { TreeviewModule } from 'ngx-treeview';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';


const routes: Routes = [
  {
    path: '',
    component: KhachhangComponent,
    children: [
      {
        path: '',
        redirectTo: 'thongtin-doanhso',
        pathMatch: 'full'
      },
      {
        path: 'danhsach-capduoi',
        component: DanhsachCapduoiComponent,
        //data: { returnUrl: window.location.pathname }
      },
      {
        path: 'datlichkham',
        component: DatlichkhamComponent,
        //data: { returnUrl: window.location.pathname }
      },
      {
        path: 'thongtin-khuyenmai',
        component: ThongtinKhuyenmaiComponent,
        //data: { returnUrl: window.location.pathname }
      },
      {
        path: 'danhsach-lienket',
        component: DanhsachLienketComponent,
        //data: { returnUrl: window.location.pathname }
      },
      {
        path: 'thongtin-doanhso',
        component: ThongtinDoanhsoComponent,
        //data: { returnUrl: window.location.pathname }
      },
    ]
  }
];

@NgModule({
  declarations: [KhachhangComponent, ThongtinDoanhsoComponent, DatlichkhamComponent,
    DanhsachCapduoiComponent, ThongtinKhuyenmaiComponent, DanhsachLienketComponent,],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    PartialsModule,
    RouterModule.forChild(routes),
    // TreeviewModule.forRoot(),


    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    ScrollDispatchModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTreeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'vi-VN' }]
})
export class KhachhangModule { }
