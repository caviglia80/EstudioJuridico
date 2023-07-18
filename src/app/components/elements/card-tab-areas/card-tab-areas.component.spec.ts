import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTabAreasComponent } from './card-tab-areas.component';

describe('CardTabAreasComponent', () => {
  let component: CardTabAreasComponent;
  let fixture: ComponentFixture<CardTabAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTabAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTabAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
