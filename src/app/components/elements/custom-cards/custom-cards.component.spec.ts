import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardsComponent } from './custom-cards.component';

describe('CustomCardsComponent', () => {
  let component: CustomCardsComponent;
  let fixture: ComponentFixture<CustomCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
