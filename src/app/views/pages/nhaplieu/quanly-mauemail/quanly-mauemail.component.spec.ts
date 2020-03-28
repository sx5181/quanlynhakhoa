import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyMauemailComponent } from './quanly-mauemail.component';

describe('QuanlyMauemailComponent', () => {
  let component: QuanlyMauemailComponent;
  let fixture: ComponentFixture<QuanlyMauemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyMauemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyMauemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
