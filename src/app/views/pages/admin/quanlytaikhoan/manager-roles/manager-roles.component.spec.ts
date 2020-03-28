import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRolesComponent } from './manager-roles.component';

describe('ManagerRolesComponent', () => {
  let component: ManagerRolesComponent;
  let fixture: ComponentFixture<ManagerRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
