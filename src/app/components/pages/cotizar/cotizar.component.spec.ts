import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizarComponent } from './cotizar.component';

describe('CotizarComponent', () => {
  let component: CotizarComponent;
  let fixture: ComponentFixture<CotizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
