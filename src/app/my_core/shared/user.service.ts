import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = ConfigService.API_URL;
  constructor(private http: HttpClient) { }

  registerUser(user: User, roles: string[]) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Roles: roles
    }
    let reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/User/Register', body, { headers: reqHeader });
  }

  refreshAccessToken(refreshAccess) {
    let data = "client_id=lamnt&client_secret=secret&" + "refresh_token=" + refreshAccess + "&grant_type=refresh_token";
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  userAuthentication(userName, password) {
    let data = "client_id=lamnt&client_secret=secret&" + "username=" + userName + "&password=" + password + "&grant_type=password";
    let reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  userAuthentiactionFacebook(fbToken) {
    return this.http.get(this.rootUrl + '/api/loginFacebook?fbToken=' + fbToken);
  }

  userAuthentiactionGoogle(googleToken) {
    return this.http.get(this.rootUrl + '/api/loginGoogle?googleToken=' + googleToken);
  }

  getUserClaims() {
    return this.http.get(this.rootUrl + '/api/GetUserClaims');
  }

  
}
