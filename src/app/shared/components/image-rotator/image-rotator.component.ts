import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-rotator',
  templateUrl: './image-rotator.component.html',
  styleUrls: ['./image-rotator.component.css']
})
export class ImageRotatorComponent implements OnInit {
  @Input() imageUrls: string[] = [];
  public currentIndex = 0;

  ngOnInit() {
    this.startImageRotation();
  }

  startImageRotation() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
    }, 10000);
  }
}
