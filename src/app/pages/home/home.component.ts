import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imageUrls = ['assets/16.jpg', 'assets/17.jpg', 'assets/6.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
