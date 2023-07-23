import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarWhatsappComponent } from './enviar-whatsapp.component';

describe('EnviarWhatsappComponent', () => {
  let component: EnviarWhatsappComponent;
  let fixture: ComponentFixture<EnviarWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarWhatsappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
