import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRotatorComponent } from './image-rotator.component';

describe('ImageRotatorComponent', () => {
  let component: ImageRotatorComponent;
  let fixture: ComponentFixture<ImageRotatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRotatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
