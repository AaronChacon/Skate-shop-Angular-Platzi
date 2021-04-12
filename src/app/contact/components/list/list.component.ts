import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IEmployeeData } from '../../../core/models/employee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() data: IEmployeeData[] = [];

  @Output() add = new EventEmitter<string>();

  label: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.add.emit(this.label)
    this.label = '';
  }

  /* calc( num:number ) {
    console.log('cal');
    return fibonacci(num)
  } */
}
