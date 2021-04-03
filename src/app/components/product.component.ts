import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, DoCheck } from "@angular/core";
import { IProduct } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    @Input() product: IProduct;
    @Output() productClicked: EventEmitter<any> = new EventEmitter;


    constructor() {
    }

    addCard(){
        console.log('add to card');
        this.productClicked.emit(this.product.id);
    }

}