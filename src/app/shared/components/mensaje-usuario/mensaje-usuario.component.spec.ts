import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeUsuarioComponent } from './mensaje-usuario.component';

describe('MensajeUsuarioComponent', () => {
  let component: MensajeUsuarioComponent;
  let fixture: ComponentFixture<MensajeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
