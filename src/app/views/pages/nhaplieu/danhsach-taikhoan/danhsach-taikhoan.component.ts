import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { DialogAddComponent } from './dialogs/dialog-add/dialog-add.component';

@Component({
  selector: 'kt-danhsach-taikhoan',
  templateUrl: './danhsach-taikhoan.component.html',
  styleUrls: ['./danhsach-taikhoan.component.scss']
})
export class DanhsachTaikhoanComponent implements OnInit {
  activeTab = 'dangkymoi';
  page = 1;
  chooseTab(activeTab) {
    this.activeTab = activeTab;
  }

  constructor(private modalService: NgbModal, public dialog: MatDialog, ) { }

  open111() {
    const modalRef = this.modalService.open(NgbdModalDanhSachTaiKhoanContent);
    modalRef.componentInstance.name = 'World';
  }

  open() {
    const dialogRef = this.dialog.open(DialogAddComponent, { data: { "a": "b" } });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      if (!res) {
        return;
      }

    });
  }

  ngOnInit() {
  }

}



@Component({
  selector: 'ngbd-modal-danhsach-taikhoan-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalDanhSachTaiKhoanContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}
