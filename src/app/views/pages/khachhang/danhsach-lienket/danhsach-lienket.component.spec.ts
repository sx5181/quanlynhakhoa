import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachLienketComponent } from './danhsach-lienket.component';

describe('DanhsachLienketComponent', () => {
  let component: DanhsachLienketComponent;
  let fixture: ComponentFixture<DanhsachLienketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachLienketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachLienketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
