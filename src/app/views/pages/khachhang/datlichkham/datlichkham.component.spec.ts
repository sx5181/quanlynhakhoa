import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatlichkhamComponent } from './datlichkham.component';

describe('DatlichkhamComponent', () => {
  let component: DatlichkhamComponent;
  let fixture: ComponentFixture<DatlichkhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatlichkhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatlichkhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
