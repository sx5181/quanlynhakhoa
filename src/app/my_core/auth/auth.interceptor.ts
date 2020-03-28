import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient, HttpHeaders, HttpXhrBackend } from "@angular/common/http";
import { UserService } from "../shared/user.service";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ConfigService } from '../shared/config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    readonly rootUrl = ConfigService.API_URL;

    constructor(private router: Router, private userService: UserService, private injector: Injector) {
        
     }

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("========================== intercept =================== ");
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
            
        if (localStorage.getItem('access_token')) {

            const refresh_token = localStorage.getItem('refresh_token');
            const data = 'refresh_token=' + refresh_token + '&grant_type=refresh_token';
            let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded' });
            return next.handle(this.modifyRequest(req)).pipe(
                catchError(error => {
                    if (error instanceof HttpErrorResponse) {
                        switch (error.status) {
                            case 401:
                                console.log('401');
                                const httpClient: HttpClient = this.injector.get(HttpClient);

                                return httpClient
                                    .post(
                                        this.rootUrl + '/token',
                                        data,
                                        {
                                            headers: new HttpHeaders()
                                                .set('Content-Type', 'application/x-www-form-urlencoded')
                                        }
                                    )
                                    .pipe(
                                        mergeMap(res => {
                                            // TODO: lưu AT và RT vào localStorage
                                            console.log("get new token when 401");
                                            localStorage.setItem('access_token', res['access_token']);
                                            localStorage.setItem('refresh_token', res['refresh_token']);
                                            return next.handle(this.modifyRequest(req));
                                        }
                                        )
                                    );
                            case 403:
                                this.router.navigateByUrl('/error/403');
                                return null;
                        }
                    } else {
                        return throwError(error);
                        //return Observable.throw(error);
                    }
                })
            );
        } else {
            // TODO: đăng xuất
            this.router.navigateByUrl('/auth/login');
            return next.handle(req);
        }
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     const reqWithCredentials = req.clone({withCredentials: true});
    //     return next.handle(reqWithCredentials)
    //      .pipe(
    //         catchError(error => {
    //           if (error.status === 401 || error.status === 403) {
    //             // handle error
    //           }
    //           return throwError(error);
    //         })
    //      );
    //   }
      
    private modifyRequest(req) {
        return req.clone({ setHeaders: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') } });
    }



    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return
    // }

}













//////////////////////////////////////////////////////////////////////////////////////////
// https://medium.com/@monkov/angular-using-httpinterceptor-for-token-refreshing-3f04ea2ccb81
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor
// {

    // constructor(private _router: Router) { }


    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    // {
        // let token = localStorage.getItem('api-token');

        // if (token) {
            // req = req.clone({
                // setHeaders: {
                    // 'api-token': token
                // }
            // } );
        // }

        // return next.handle(req).catch(err => {
            // console.log(err);
            // if (err.status === 401) {
                // if (err.error.message == "Token is exp") {
                    // //Genrate params for token refreshing
                  // let params = {
                    // token: token,
                    // refreshToken: localStorange("refreshToken");
                  // };
                  // return this.http.post('localhost:8080/auth/refresh', params).flatMap(
                    // (data: any) => {
                      // //If reload successful update tokens
                      // if (data.status == 200) {
                        // //Update tokens
                        // localStorange.setItem("api-token", data.result.token);
                        // localStorange.setItem("refreshToken", data.result.refreshToken);
                        // //Clone our fieled request ant try to resend it
                        // req = req.clone({
                          // setHeaders: {
                            // 'api-token': data.result.token
                          // }
                        // });
                        // return next.handle(req).catch(err => {
                          // //Catch another error
                        // });
                      // }else {
                        // //Logout from account
                      // }
                    // }
                  // );
                // }else {
                    // //Logout from account or do some other stuff
                // }
            // }
            // return Observable.throw(err);
        // });

      
    // }
// }