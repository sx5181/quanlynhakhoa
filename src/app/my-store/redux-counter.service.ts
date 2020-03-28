import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
export const reduxCounterService= new (class CounterService {
  static get DECR(){ return "DECR" };
  static get INCR(){ return "INCR" };
  dispatcher: BehaviorSubject<string>;
  store: any;
  constructor() {
    this.dispatcher = new BehaviorSubject("");
    this.store = this.dispatcher
      .pipe(scan(this.reducer,
        //initial store
        { counter: 0 }));
   }

   reducer(state: { counter: number; }, action: any) {
    switch (action) {
      case CounterService.INCR: return { ...state, counter: state.counter + 1 };
      case CounterService.DECR: return { ...state, counter: state.counter - 1 };
      default: return state;
    }
  }
  decr() {
    this.dispatcher.next(CounterService.INCR);
  }

  incr() {
    this.dispatcher.next(CounterService.DECR);
  }
  getStore() {
    return this.store;
  }
})();
