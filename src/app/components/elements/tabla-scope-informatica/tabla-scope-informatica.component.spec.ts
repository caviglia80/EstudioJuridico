import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaScopeInformaticaComponent } from './tabla-scope-informatica.component';

describe('TablaScopeInformaticaComponent', () => {
  let component: TablaScopeInformaticaComponent;
  let fixture: ComponentFixture<TablaScopeInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaScopeInformaticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaScopeInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
