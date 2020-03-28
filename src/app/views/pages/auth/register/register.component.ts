// Angular
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RxJS
import { finalize, takeUntil, tap } from 'rxjs/operators';
// Translate
import { TranslateService } from '@ngx-translate/core';
// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/reducers';
// Auth
import { AuthNoticeService, Register } from '../../../../core/auth/';
import { Subject } from 'rxjs';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { User } from '../../../../my_core/models/user';

@Component({
	selector: 'kt-register',
	templateUrl: './register.component.html',
	encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, OnDestroy {
	registerForm: FormGroup;

	loading = false;
	errors: any = [];

	step = 0;
	optionCard;

	userInfo: User = new User();

	option;

	private unsubscribe: Subject<any>; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

	constructor(
		private authNoticeService: AuthNoticeService,
		private translate: TranslateService,
		private router: Router,
		//private auth: AuthService,
		// private store: Store<AppState>,
		private fb: FormBuilder,
		private cdr: ChangeDetectorRef
	) {
		this.unsubscribe = new Subject();
	}

	/*
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */

	/**
	 * On init
	 */
	ngOnInit() {
		this.initRegisterForm();
	}

	/*
    * On destroy
    */
	ngOnDestroy(): void {
		this.unsubscribe.next();
		this.unsubscribe.complete();
		this.loading = false;
	}

	/**
	 * Form initalization
	 * Default params, validators
	 */
	initRegisterForm() {
		this.registerForm = this.fb.group({
			fullname: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
			])
			],
			phone: ['', Validators.compose([
				Validators.required,
				// Validators.minLength(6),
				Validators.pattern("^[0-9_-]{10,12}")
			])
			],
			email: ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.minLength(3),
				// https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
				Validators.maxLength(320)
			]),
			],
			address: ['', Validators.compose([
				Validators.required,
			])
			],
			password: ['', Validators.compose([
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(100)
			])
			],
			confirmPassword: ['', Validators.compose([
				Validators.required,
				Validators.minLength(6),
				Validators.maxLength(100)
			])
			],
		}, {
			validator: ConfirmPasswordValidator.MatchPassword
		});


	}

	initRegisterFormStep2() {
		this.registerForm = this.fb.group({
			// code: ['', Validators.compose([
			// 	Validators.required
			// ])
			// ],
			phone1: ['', Validators.compose([

			])
			],
			phone2: ['', Validators.compose([

			])
			],
			phone3: ['', Validators.compose([

			])
			],
			phone4: ['', Validators.compose([

			])
			],
		})
	}

	initRegisterFormStep3() {
		this.registerForm = this.fb.group({
			// option: ['', Validators.compose([
			// 	Validators.required
			// ])
			// ],
			agree: [false, Validators.compose([Validators.required])]
		});
	}

	/**
	 * Form Submit
	 */
	submit() {
		const controls = this.registerForm.controls;
		console.log("Thong tin goi da mua: " + this.optionCard);
		// check form
		if (this.registerForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		// Lay thong tin thanh toan
		console.log("Thong tin goi da mua: " + this.optionCard);


		this.loading = true;

		if (!controls.agree.value) {
			// you must agree the terms and condition
			// checkbox cannot work inside mat-form-field https://github.com/angular/material2/issues/7891
			this.authNoticeService.setNotice('You must agree the terms and condition', 'danger');
			return;
		}


		// this.auth.register(_user).pipe(
		// 	tap(user => {
		// 		if (user) {
		// 			// this.store.dispatch(new Register({ authToken: user.accessToken }));
		// 			// // pass notice message to the login page
		// 			// this.authNoticeService.setNotice(this.translate.instant('AUTH.REGISTER.SUCCESS'), 'success');
		// 			// this.router.navigateByUrl('/auth/login');
		// 		} else {
		// 			this.authNoticeService.setNotice(this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
		// 		}
		// 	}),
		// 	takeUntil(this.unsubscribe),
		// 	finalize(() => {
		// 		this.loading = false;
		// 		this.cdr.markForCheck();
		// 	})
		// ).subscribe();
	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {

		const control = this.registerForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

	nextStep() {
		const controls = this.registerForm.controls;

		// check form
		if (this.registerForm.invalid) {
			Object.keys(controls).forEach(controlName => {
				console.log(controlName);
				controls[controlName].markAsTouched()
			}
			);
			this.authNoticeService.setNotice('Bạn phải nhập vào các trường bắt buộc', 'danger');
			alert('loi')
			return;
		}
		this.step++;
		if (this.step == 1) {
			//Luu thong tin nguoi dung tu form
			// this.userInfo.clear();
			this.userInfo.phone = controls.phone.value;
			this.userInfo.fullname = controls.fullname.value;
			this.userInfo.email = controls.email.value;
			this.userInfo.password = controls.password.value;
			this.initRegisterFormStep2();
		} else if (this.step == 2) {
			//Luu thong tin the khac hang
			// this.userInfo.code = controls.code.value;
			this.userInfo.phone1 = controls.phone1.value;
			this.userInfo.phone2 = controls.phone2.value;
			this.userInfo.phone3 = controls.phone3.value;
			this.userInfo.phone4 = controls.phone4.value;
			this.initRegisterFormStep3();
		}
	}

}
