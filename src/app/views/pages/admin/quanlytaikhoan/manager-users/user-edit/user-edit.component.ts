import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../../app/my_core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SubheaderService, LayoutConfigService } from '../../../../../../../app/core/_base/layout';
import { LayoutUtilsService } from '../../../../../../../app/core/_base/crud';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../app/core/reducers';

@Component({
  selector: 'kt-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  // Public properties
  user: User;
  userForm: FormGroup;
  hasFormErrors = false;
  // Private properties
  private subscriptions: Subscription[] = [];

  title: String = "Thêm mới";
  selectedTab = 0;
  rolesSubject;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private userFB: FormBuilder,
    private subheaderService: SubheaderService,
    private layoutUtilsService: LayoutUtilsService,
    private store: Store<AppState>,
    private layoutConfigService: LayoutConfigService) { }

  ngOnInit() {

    const routeSubscription = this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      // let data: User = JSON.parse(params['profile']);
      if (id && id > 0) {
        this.title = "Sửa người dùng";
        this.user = {
          id: "1",
          password: "string",
          email: "admin@demo.com",
          roles: ["User"],
          pic: "string",
          fullname: "string",
          //companyName: "string",
          phone: "099999",
          address: "string",
          code: "",
          idref: "test"
        }

      } else {
        this.title = "Thêm mói người dùng";
      }
    });

    this.createForm();
  }

  /**
	 * Create form
	 */
  createForm() {
    this.userForm = this.userFB.group({
      username: [this.user.phone, Validators.required],
      fullname: [this.user.fullname, Validators.required],
      email: [this.user.email, Validators.email],
      phone: [this.user.phone],
      // companyName: [this.user.companyName],
      occupation: [this.user.id]
    });
  }

  /**
     * Returns component title
     */
  getComponentTitle() {
    let result = 'Create user';
    // if (!this.user || !this.user.id) {
    //   return result;
    // }

    // result = `Edit user - ${this.user.fullname}`;
    return result;
  }

}
