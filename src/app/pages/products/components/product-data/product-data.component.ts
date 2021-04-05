import { Component, Input, Output, EventEmitter} from "@angular/core";
import { IProduct } from "../../../../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product-data.component.html',
    styleUrls: ['./product-data.component.scss']
})
export class ProductDataComponent {

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