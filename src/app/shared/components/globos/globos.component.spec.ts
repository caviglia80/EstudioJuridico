import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobosComponent } from './globos.component';

describe('GlobosComponent', () => {
  let component: GlobosComponent;
  let fixture: ComponentFixture<GlobosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
