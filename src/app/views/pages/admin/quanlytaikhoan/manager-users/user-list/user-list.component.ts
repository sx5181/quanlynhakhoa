import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, skip, take, delay, find } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutUtilsService, QueryParamsModel } from '../../../../../../core/_base/crud';
import { SubheaderService } from '../../../../../../core/_base/layout';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { User } from '../../../../../../my_core/models/user';
import { each } from 'lodash';
import { DialogCreateEditComponent } from '../dialogs/dialog-create-edit/dialog-create-edit.component';
// import { User, Role } from '../../../../../../core/auth';

@Component({
  selector: 'kt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns = ['select', 'id', 'username', 'email', 'fullname', 'roles', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('sort1', { static: true }) sort: MatSort;
  // Filter fields
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  lastQuery: QueryParamsModel;
  // Selection
  selection = new SelectionModel<User>(true, []);
  // usersResult: User[] = [];
  // allRoles: Role[] = [];

  // Subscriptions
  private subscriptions: Subscription[] = [];

  dataSource: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private layoutUtilsService: LayoutUtilsService,
    private subheaderService: SubheaderService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {

    //Test data
    const ELEMENT_DATA: User[] = [
      {
        id: "1",
        password: "string",
        email: "admin@demo.com",
        roles: ["User"],
        pic: "string",
        fullname: "nguyen tien lam",
        phone: "0988381416",
        address: "string",
        code: "",
        idref: "0988381416"
      },
      {
        id: "1",
        password: "string",
        email: "admin@demo.com",
        roles: ["User"],
        pic: "string",
        fullname: "nguyen tien lam",
        phone: "0988381416",
        address: "string",
        code: "",
        idref: "0988381416"
      },
    ]

    this.dataSource = ELEMENT_DATA;

    // Filtration, bind to searchInput
    const searchSubscription = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      // tslint:disable-next-line:max-line-length
      debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
      distinctUntilChanged(), // This operator will eliminate duplicate values
      tap(() => {
        // this.paginator.pageIndex = 0;
        this.loadUsersList();
      })
    ).subscribe();
    this.subscriptions.push(searchSubscription);

    // Set title to page breadCrumbs
    this.subheaderService.setTitle('User management');

  }

  /**
   * Load users list
   */
  loadUsersList() {
    const searchText: string = this.searchInput.nativeElement.value;
    alert(searchText);
    this.selection.clear();
    // const queryParams = new QueryParamsModel(
    // 	this.filterConfiguration(),
    // 	this.sort.direction,
    // 	this.sort.active,
    // 	this.paginator.pageIndex,
    // 	this.paginator.pageSize
    // );
    // this.store.dispatch(new UsersPageRequested({ page: queryParams }));
    this.selection.clear();
  }

  /* UI */
	/**
	 * Returns user roles string
	 *
	 * @param user: User
	 */
  getUserRolesStr(user: User): string {
    const titles: string[] = [];
    // each(user.roles, (roleId: number) => {
    // 	const _role = find(this.allRoles, (role: Role) => role.id === roleId);
    // 	if (_role) {
    // 		titles.push(_role.title);
    // 	}
    // });
    return titles.join(', ');
  }

  editUser(user) {
    // this.router.navigate(['../edit', id], { relativeTo: this.activatedRoute });
    const dialogRef = this.dialog.open(DialogCreateEditComponent, { width: '1000px', data: user });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      if (!res) {
        return;
      }

    });
  }

}
