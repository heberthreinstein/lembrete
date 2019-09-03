import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepPage } from './cep.page';

describe('CepPage', () => {
  let component: CepPage;
  let fixture: ComponentFixture<CepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
