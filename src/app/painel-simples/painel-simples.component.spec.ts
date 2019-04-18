/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PainelSimplesComponent } from './painel-simples.component';

describe('PainelSimplesComponent', () => {
  let component: PainelSimplesComponent;
  let fixture: ComponentFixture<PainelSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
