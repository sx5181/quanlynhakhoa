import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kt-quanlydoanhso',
  templateUrl: './quanlydoanhso.component.html',
  styleUrls: ['./quanlydoanhso.component.scss']
})
export class QuanlydoanhsoComponent implements OnInit {

  constructor(private http: HttpClient) {
    alert('ddmmco vao ko')
   }
  ngOnInit() {
  
  }

}
