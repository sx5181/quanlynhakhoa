// Angular
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RxJS
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil, tap } from 'rxjs/operators';
// Translate
import { TranslateService } from '@ngx-translate/core';
// Store
// import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/reducers';
// Auth
import { AuthNoticeService, Login } from '../../../../core/auth';
import { AuthenticationService } from '../../../../my_core/shared/authentication.service';
import { UserAuth } from '../../../../my_core/models/user.auth.model';
import { HttpErrorResponse } from '@angular/common/http';


/**
 * ! Just example => Should be removed in development
 */
const DEMO_PARAMS = {
	EMAIL: 'lamnt90',
	PASSWORD: '123456'
};

@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
	// Public params
	loginForm: FormGroup;
	loading = false;
	isLoggedIn$: Observable<boolean>;
	errors: any = [];

	private unsubscribe: Subject<any>;

	private returnUrl: any;

	// Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	/**
	 * Component constructor
	 *
	 * @param router: Router
	 * @param auth: AuthService
	 * @param authNoticeService: AuthNoticeService
	 * @param translate: TranslateService
	 * @param store: Store<AppState>
	 * @param fb: FormBuilder
	 * @param cdr
	 * @param route
	 */
	constructor(
		private router: Router,
		private authService: AuthenticationService,
		private authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		//private store: Store<AppState>,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef,
		private route: ActivatedRoute
	) {
		this.unsubscribe = new Subject();
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.initLoginForm();

		// redirect back to the returnUrl before login
		this.route.queryParams.subscribe(params => {
			this.returnUrl = params.returnUrl || '/';
		});
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}

	/**
	 * Form initalization
	 * Default params, validators
	 */
	initLoginForm() {
		// demo message to show
		if (!this.authNoticeService.onNoticeChanged$.getValue()) {
			const initialNotice = `Use account
			<strong>${DEMO_PARAMS.EMAIL}</strong> and password
			<strong>${DEMO_PARAMS.PASSWORD}</strong> to continue.`;
			this.authNoticeService.setNotice(initialNotice, 'info');
		}

		this.loginForm = this.fb.group({
			phone: ["", Validators.compose([
				Validators.required,
				//Validators.email,
				Validators.minLength(3),
				Validators.maxLength(100) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
			])
			],
			password: ["", Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(50)
			])
			]
		});
	}

	/**
	 * Form Submit
	 */
	submit() {
		const controls = this.loginForm.controls;
		/** check form */
		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;

		const authData = {
			username: controls.email.value,
			password: controls.password.value
		};

		this.authService.login(authData.username, authData.password).subscribe((user: UserAuth) => {
			//Luu thong tin token & user
			localStorage.setItem('access_token', user.access_token);
			localStorage.setItem('refresh_token', user.refresh_token);
			localStorage.setItem('fullName', user.fullName);
			localStorage.setItem('userName', user.userName);
			localStorage.setItem('userRoles', user.role);
			this.authService.updateCurrentUser(user);
			this.router.navigateByUrl(this.returnUrl); // Main page
		}, (err: HttpErrorResponse) => {
			this.authNoticeService.setNotice(err.toString(), 'danger');
		}).add(() => {
			//Called when operation is complete (both success and error)
			this.loading = false;
			this.cdr.markForCheck();
		});

		// this.authService
		// 	.login(authData.username, authData.password)
		// 	.pipe(
		// 		tap(user => {
		// 			if (user) {
		// 				this.store.dispatch(new Login({authToken: user.access_token}));
		// 				//Luu thong tin token & user
		// 				localStorage.setItem('access_token', user.access_token);
		// 				localStorage.setItem('refresh_token', user.refresh_token);
		// 				localStorage.setItem('fullName', user.fullName);
		// 				localStorage.setItem('userName', user.userName);
		// 				localStorage.setItem('userRoles', user.role);
		// 				this.authService.currentUserSubject.next(user);
		// 				this.router.navigateByUrl(this.returnUrl); // Main page
		// 			} else {
		// 				this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
		// 			}
		// 		}),
		// 		takeUntil(this.unsubscribe),
		// 		finalize(() => {
		// 			this.loading = false;
		// 			this.cdr.markForCheck();
		// 		})
		// 	)
		// 	.subscribe();
	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}
}
