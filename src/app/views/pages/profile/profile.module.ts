import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { PartialsModule } from '../../partials/partials.module';
import { AuthGuard } from '../../../my_core/auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangepassComponent, MyErrorStateMatcher } from './changepass/changepass.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: InfoComponent,
        data: { returnUrl: window.location.pathname }
      },
      {
        path: 'change-pass',
        component: ChangepassComponent,
        data: { returnUrl: window.location.pathname }
      },

    ]
  }
];

@NgModule({
  declarations: [InfoComponent, ProfileComponent, ChangepassComponent],
  // entryComponents: [MyErrorStateMatcher],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    PartialsModule,
    RouterModule.forChild(routes),
    //ModalModule.forRoot(),
    //BsDropdownModule.forRoot(),
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
    MatInputModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ProfileModule {

}
