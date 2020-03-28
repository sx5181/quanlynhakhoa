import { Component, OnInit } from '@angular/core';
import * as KTAvatar from '../../../../../assets/js/global/components/base/avatar';
@Component({
  selector: 'kt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let avatar1 = new KTAvatar('kt_user_avatar');
    console.log(avatar1.src);
    avatar1.on((src) => {
      console.log(src);
    })
  }

}
