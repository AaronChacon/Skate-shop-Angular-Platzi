import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeneratorService } from '../../../core/services/generator.service';
import { IEmployeeData } from '../../../core/models/employee.model';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

const names = ['aaron', 'mariam', 'oriana', 'karla', 'antonieta', 'carlos']
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: IEmployeeData[] = [];
  marketingList: IEmployeeData[] = [];

  value: number;
  valueB$: Observable<number>;

  sub$: Subscription

  constructor(
    private generatorService: GeneratorService,
  ) { 
    this.valueB$ = this.generatorService.getData()
                      .pipe(
                        tap(num => console.log(num))
                      )
  }
  
  ngOnInit(): void { 
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.marketingList = this.generatorService.generate(names, [10, 20], 10);

    /* this.sub$ = this.generatorService.getData()
                    .subscribe(value => {
                    this.value = value;
                    console.log(this.value);
                    }) */

  }

  ngOnDestroy(): void {
    /* console.log('destroy'); */
    /* this.sub$.unsubscribe(); */
  }


  addItem(list: IEmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20])
    })
  }

}
