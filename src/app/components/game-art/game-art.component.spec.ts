/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GameArtComponent } from './game-art.component';

describe('GameArtComponent', () => {
  let component: GameArtComponent;
  let fixture: ComponentFixture<GameArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
