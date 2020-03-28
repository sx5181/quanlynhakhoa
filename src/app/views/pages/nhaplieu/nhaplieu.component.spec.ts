import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaplieuComponent } from './nhaplieu.component';

describe('NhaplieuComponent', () => {
  let component: NhaplieuComponent;
  let fixture: ComponentFixture<NhaplieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaplieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaplieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
