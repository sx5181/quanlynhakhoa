import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaphoadonComponent } from './nhaphoadon.component';

describe('NhaphoadonComponent', () => {
  let component: NhaphoadonComponent;
  let fixture: ComponentFixture<NhaphoadonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaphoadonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaphoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
