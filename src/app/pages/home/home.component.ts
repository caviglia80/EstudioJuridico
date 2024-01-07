import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inicio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imageUrls = ['assets/16.webp', 'assets/17.webp', 'assets/6.webp'];
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
