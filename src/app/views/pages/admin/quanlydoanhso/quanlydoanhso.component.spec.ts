import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlydoanhsoComponent } from './quanlydoanhso.component';

describe('QuanlydoanhsoComponent', () => {
  let component: QuanlydoanhsoComponent;
  let fixture: ComponentFixture<QuanlydoanhsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlydoanhsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlydoanhsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
