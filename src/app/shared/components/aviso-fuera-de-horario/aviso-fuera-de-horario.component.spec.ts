import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoFueraDeHorarioComponent } from './aviso-fuera-de-horario.component';

describe('AvisoFueraDeHorarioComponent', () => {
  let component: AvisoFueraDeHorarioComponent;
  let fixture: ComponentFixture<AvisoFueraDeHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoFueraDeHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoFueraDeHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
