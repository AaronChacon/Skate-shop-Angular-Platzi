import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'skate-shop';
  names = ['Aaron', 'Mariam', 'Anastasia'];

  constructor() { }

  ngOnInit(): void {
  }

  addNames(): void {
    this.names.push(this.title);
  }

  deleteNames(index: number): void {
    this.names.splice(index, 1);
  }

}
