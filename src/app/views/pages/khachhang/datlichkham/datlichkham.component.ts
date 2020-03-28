import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-datlichkham',
  templateUrl: './datlichkham.component.html',
  styleUrls: ['./datlichkham.component.scss'],

})
export class DatlichkhamComponent implements OnInit {

  model: any = {};

  myFilter = (d: Date): boolean => {
    const day = d.getTime();
    const currentDay = (new Date());
    // Prevent Saturday and Sunday from being selected.
    return day >= currentDay.getTime() - ((currentDay.getHours() + 1) * 3600 * 1000);
  }
  constructor() { }

  ngOnInit() {
  }

}
