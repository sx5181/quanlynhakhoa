import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })

//const reduxRoleService = new 
export class ReduxRoleService {
  static get GET_ALL_ROLE() { return 'GET_ALL_ROLE' }
  static get GET_ALL_ROLE_SUCCESS() { return 'GET_ALL_ROLE_SUCCESS' }
  static get GET_ALL_ROLE_FALSE() { return 'GET_ALL_ROLE_FALSE' }

  dispatcher;
  store: any;
  initState = {
    "role": {
      loading: false,
      success: false,
      fail: false,
      data: null
    }
  }
  constructor(private http: HttpClient) {
    this.dispatcher = new BehaviorSubject("");
    this.store = this.dispatcher
      .pipe(scan(this.reducer,
        //initial store
        this.initState
      ));
  }

  reducer(state, action) {
    switch (action) {
      case ReduxRoleService.GET_ALL_ROLE:
        return { ...state, role: { ...this.initState, loading: true } };
      case ReduxRoleService.GET_ALL_ROLE_SUCCESS:
        //call service
        return { ...state, role: { ...this.initState, loading: false, data: this.http.get("http://httpbin.org/get") } }
      default: return state;
    }
  }

  getAllRole() {
    this.dispatcher.next(ReduxRoleService.GET_ALL_ROLE);
  }

  getAllRoleSuccess() {
    this.dispatcher.next(ReduxRoleService.GET_ALL_ROLE_SUCCESS);
  }

  getStore() {
    return this.store;
  }

};
