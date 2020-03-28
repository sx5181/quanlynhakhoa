import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyKhuyenmaiComponent } from './quanly-khuyenmai.component';

describe('QuanlyKhuyenmaiComponent', () => {
  let component: QuanlyKhuyenmaiComponent;
  let fixture: ComponentFixture<QuanlyKhuyenmaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyKhuyenmaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyKhuyenmaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
