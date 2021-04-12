import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../../core/services/generator.service';
import { IEmployeeData } from '../../../core/models/employee.model';

const names = ['aaron', 'mariam', 'oriana', 'karla', 'antonieta', 'carlos']

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: IEmployeeData[] = [];
  marketingList: IEmployeeData[] = [];

  constructor(
    private generatorService: GeneratorService,
  ) { }

  ngOnInit(): void { 
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.marketingList = this.generatorService.generate(names, [10, 20], 10);
  }

  addItem(list: IEmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    })
  }

}
