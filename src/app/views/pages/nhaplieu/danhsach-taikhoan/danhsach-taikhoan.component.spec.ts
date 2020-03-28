import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachTaikhoanComponent } from './danhsach-taikhoan.component';

describe('DanhsachTaikhoanComponent', () => {
  let component: DanhsachTaikhoanComponent;
  let fixture: ComponentFixture<DanhsachTaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachTaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachTaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
