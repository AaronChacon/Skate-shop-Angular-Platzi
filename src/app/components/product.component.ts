import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, DoCheck } from "@angular/core";
import { IProduct } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() product: IProduct;
    @Output() productClicked: EventEmitter<any> = new EventEmitter;

    today = new Date();

    constructor() {
    }

    addCard(){
        console.log('add to card');
        this.productClicked.emit(this.product.id);
    }

}