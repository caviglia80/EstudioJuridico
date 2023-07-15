import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasosExitoComponent } from './casos-exito.component';

describe('CasosExitoComponent', () => {
  let component: CasosExitoComponent;
  let fixture: ComponentFixture<CasosExitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasosExitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasosExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
