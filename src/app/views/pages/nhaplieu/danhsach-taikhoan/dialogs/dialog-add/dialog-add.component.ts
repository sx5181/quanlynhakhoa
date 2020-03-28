import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../../../../../app/my_core/models/user';

@Component({
  selector: 'kt-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {
  viewLoading = true;
  //nhan data
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    console.log("Nhan data " + JSON.stringify(data));
    this.createForm();

    setInterval(() => this.viewLoading = false, 2000);
  }
  startDate;
  endDate;
  customerForm;
  user: User = {
    fullname: "Dinh Tran Linh",
    email: "linhdt@gmail.com",
    phone: "0988989898",
    code: "",
    idref: "",
  }
  createForm() {
    this.customerForm = this.fb.group({
      fullName: [this.user.fullname, Validators.required],
      email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
      phone: [this.user.phone, Validators.compose([Validators.nullValidator])],
      code: ["", Validators.compose([Validators.required])],
      fullNameGT: ["Trinh Kim Tuan", Validators.required],
      emailGT: ["changtrai_matnai@yahoo.com", Validators.compose([Validators.required, Validators.email])],
      phoneGT: ["0988777473", Validators.compose([Validators.nullValidator])],
      startDate: [new Date(), Validators.compose([Validators.nullValidator])],
      endDate: ["", Validators.compose([Validators.nullValidator])],
      //type: ["", Validators.compose([Validators.required])],
    });
  }
  // constructor(public dialog: MatDialog) { }

  // openDialog() {
  //   // const dialogRef = this.dialog.open(DialogAddComponent);

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //   console.log(`Dialog result: ${result}`);
  //   // });
  // }

  ngOnInit() {
  }

}
