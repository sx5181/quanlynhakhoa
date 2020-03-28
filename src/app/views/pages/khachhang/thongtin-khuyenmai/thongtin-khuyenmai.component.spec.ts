import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinKhuyenmaiComponent } from './thongtin-khuyenmai.component';

describe('ThongtinKhuyenmaiComponent', () => {
  let component: ThongtinKhuyenmaiComponent;
  let fixture: ComponentFixture<ThongtinKhuyenmaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinKhuyenmaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinKhuyenmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
