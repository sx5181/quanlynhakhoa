import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinDoanhsoComponent } from './thongtin-doanhso.component';

describe('ThongtinDoanhsoComponent', () => {
  let component: ThongtinDoanhsoComponent;
  let fixture: ComponentFixture<ThongtinDoanhsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinDoanhsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinDoanhsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
