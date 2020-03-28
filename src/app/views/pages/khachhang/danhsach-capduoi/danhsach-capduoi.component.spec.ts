import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachCapduoiComponent } from './danhsach-capduoi.component';

describe('DanhsachCapduoiComponent', () => {
  let component: DanhsachCapduoiComponent;
  let fixture: ComponentFixture<DanhsachCapduoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachCapduoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachCapduoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
