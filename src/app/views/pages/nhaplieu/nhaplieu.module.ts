import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatDatepickerModule, MatProgressSpinnerModule, MatInputModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PartialsModule } from '../../partials/partials.module';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule, NgbModalModule, NgbModule, NgbNavItem, NgbNav, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NhaphoadonComponent, NgbdModalContent } from './nhaphoadon/nhaphoadon.component';
import { NhaplieuComponent } from './nhaplieu.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { DanhsachTaikhoanComponent, NgbdModalDanhSachTaiKhoanContent } from './danhsach-taikhoan/danhsach-taikhoan.component';
import { QuanlyMauemailComponent } from './quanly-mauemail/quanly-mauemail.component';
import { QuanlyKhuyenmaiComponent } from './quanly-khuyenmai/quanly-khuyenmai.component';
import { DialogAddComponent } from './danhsach-taikhoan/dialogs/dialog-add/dialog-add.component';

const routes: Routes = [
  {
    path: '',
    // component: NhaplieuComponent,
    children: [
      {
        path: '',
        redirectTo: 'nhaphoadon',
        pathMatch: 'full'
      },
      {
        path: 'nhaphoadon',
        component: NhaphoadonComponent,
        data: { returnUrl: window.location.pathname }
      },
      {
        path: 'danhsach-khachhang',
        component: DanhsachTaikhoanComponent,
        // data: { returnUrl: window.location.pathname }
      },
      {
        path: 'quanly-mauemail',
        component: QuanlyMauemailComponent,
        // data: { returnUrl: window.location.pathname }
      },
    ]
  }
];


@Injectable({
  providedIn: "root"
})
@NgModule({
  declarations: [NhaphoadonComponent, NgbdModalContent, NgbdModalDanhSachTaiKhoanContent,
    DanhsachTaikhoanComponent, QuanlyMauemailComponent, QuanlyKhuyenmaiComponent,
    DialogAddComponent],
  entryComponents: [NgbdModalContent, NgbdModalDanhSachTaiKhoanContent, DialogAddComponent],
  providers: [NgbNavItem, NgbNav, NgbActiveModal],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    PartialsModule,
    RouterModule.forChild(routes),
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbModalModule,
    NgbModule,
    MatDialogModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NhaplieuModule { }
