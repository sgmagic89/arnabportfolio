/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavItemsComponent } from './nav-items.component';

describe('NavItemsComponent', () => {
  let component: NavItemsComponent;
  let fixture: ComponentFixture<NavItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
