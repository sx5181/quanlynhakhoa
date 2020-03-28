// Angular
import { Component, Input, OnInit } from '@angular/core';
// RxJS
import { Observable } from 'rxjs';
// NGRX
import { select, Store } from '@ngrx/store';
// State
import { AppState } from '../../../../../core/reducers';
import { currentUser, Logout, User } from '../../../../../core/auth';
import { AuthenticationService } from '../../../../../my_core/shared/authentication.service';
import { UserAuth } from '../../../../../my_core/models/user.auth.model';


@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
	// Public properties
	user$: Observable<UserAuth>;

	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;

	/**
	 * Component constructor
	 *
	 * @param store: Store<AppState>
	 */
	constructor( private authService: AuthenticationService) {
		
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		
		// this.user$ = this.store.pipe(select(currentUser));
		this.user$ = this.authService.currentUser;
		
		// this.user$.subscribe((user:UserAuth)=>{
		// 	alert("user"+ user.fullName);
		// })
	}

	/**
	 * Log out
	 */
	logout() {
		// this.store.dispatch(new Logout());
	}
}
