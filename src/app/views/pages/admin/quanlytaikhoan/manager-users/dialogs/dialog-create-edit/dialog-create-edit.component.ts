import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../../../../app/core/auth/_models/user.model';
import { Role } from '../../../../../../../../app/my_core/models/role.enum';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kt-dialog-create-edit',
  templateUrl: './dialog-create-edit.component.html',
  styleUrls: ['./dialog-create-edit.component.css']
})
export class DialogCreateEditComponent implements OnInit {

  viewLoading = true;
  selectTab = 0;

  user: User;
  userForm: FormGroup;
  userFormGT: FormGroup;

  roles = [Role.Admin, Role.User, Role.Collaborators, Role.Receptionist];
  selectedRole = Role.User;

  //nhan data
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userFB: FormBuilder) {
    console.log("Nhan data " + JSON.stringify(data));
    if (data) {
      this.user = data;
      this.createForm();
    }
    setInterval(() => this.viewLoading = false, 1000);
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.userFB.group({
      username: [this.user.phone, Validators.required],
      fullname: [this.user.fullname, Validators.required],
      email: [this.user.email, Validators.email],
      phone: [this.user.phone],
      addess: [this.user.address],
      // companyName: [this.user.companyName],
      // occupation: [this.user.id]
    });

    this.userFormGT = this.userFB.group({
      phone: [""],
      username: ["", Validators.required],
      email: [this.user.email, Validators.email],
      address: [this.user.address],
    });
  }

}
