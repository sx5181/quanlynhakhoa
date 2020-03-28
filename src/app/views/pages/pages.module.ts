// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { NhaplieuComponent } from './nhaplieu/nhaplieu.component';
import { KhachhangModule } from './khachhang/khachhang.module';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { DanhsachCapduoiComponent } from './khachhang/danhsach-capduoi/danhsach-capduoi.component';
import { NhaplieuModule } from './nhaplieu/nhaplieu.module';
import { NgbdModalContent } from './nhaplieu/nhaphoadon/nhaphoadon.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [MyPageComponent, TrangchuComponent,],
	exports: [],
	imports: [
		NgxOrgChartModule,
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		NgbModule,
		AdminModule,
		ProfileModule,
		KhachhangModule,
		NhaplieuModule
	],
	providers: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule {
}
