import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { User } from '../models/user';
import { UserAuth } from '../models/user.auth.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  readonly apiUrl = ConfigService.API_URL;

  private currentUserSubject: BehaviorSubject<UserAuth>;
  public currentUser: Observable<UserAuth>;


  public updateCurrentUser(user: UserAuth) {
    this.currentUserSubject.next(user);
  }


  constructor(private http: HttpClient) {
    let getUser = new UserAuth();
    getUser.access_token = localStorage.getItem("access_token");
    getUser.refresh_token = localStorage.getItem("refresh_token");
    getUser.fullName = localStorage.getItem("fullName");
    getUser.role = localStorage.getItem("userRoles");
    getUser.userName = localStorage.getItem("userName");
    if (getUser.userName) {
      this.currentUserSubject = new BehaviorSubject<UserAuth>(getUser);
      this.currentUser = this.currentUserSubject.asObservable();
    }

  }

  // public get currentUser(): Observable<UserAuth> {
  //     return this.currentUserSubject.asObservable();
  // }

  public get currentUserValue(): UserAuth {
    return this.currentUserSubject.value;
  }


  register(user: User, roles: string[]) {
    const body = {
      phone: user.phone,
      password: user.password,
      email: user.email,
      roles: roles
    }

    return this.http.post(this.apiUrl + '/api/User/Register', body, { headers: this.reqHeader });
  }


  login(username: string, password: string) {
    let data = "username=" + username + "&password=" + password + "&grant_type=password";
    return this.http.post(this.apiUrl + "/token", data, { headers: this.reqHeader });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('fullName');
    localStorage.removeItem('userName');
    localStorage.removeItem('userRoles');
    this.currentUserSubject.next(null);
  }

  getAllRoles() {
    let reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.get(this.apiUrl + '/api/GetAllRoles', { headers: reqHeader });
  }

  roleMatch(allowedRoles: string[]): boolean {
    let isMatch = false;
    let userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;

  }



  // register(user: User): Observable<any> {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.set('Content-Type', 'application/json');
  //   return this.http.post<User>(API_USERS_URL, user, { headers: httpHeaders })
  //     .pipe(
  //       map((res: User) => {
  //         return res;
  //       }),
  //       catchError(err => {
  //         return null;
  //       })
  //     );
  // }

  /*
   * Submit forgot password request
   *
   * @param {string} email
   * @returns {Observable<any>}
   */
  public requestPassword(email: string): Observable<any> {
    return this.http.get(this.apiUrl + '/forgot?=' + email)
      .pipe(catchError(this.handleError('forgot-password', []))
      );
  }


  /*
  * Handle Http operation that failed.
  * Let the app continue.
  *
* @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
