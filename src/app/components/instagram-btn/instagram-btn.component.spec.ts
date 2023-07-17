import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstagramBtnComponent } from './instagram-btn.component';

describe('InstagramBtnComponent', () => {
  let component: InstagramBtnComponent;
  let fixture: ComponentFixture<InstagramBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
