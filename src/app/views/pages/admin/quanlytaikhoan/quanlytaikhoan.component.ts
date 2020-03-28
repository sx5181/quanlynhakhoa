import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'kt-quanlytaikhoan',
  templateUrl: './quanlytaikhoan.component.html',
  styleUrls: ['./quanlytaikhoan.component.scss']
})
export class QuanlytaikhoanComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
   
  }

}
