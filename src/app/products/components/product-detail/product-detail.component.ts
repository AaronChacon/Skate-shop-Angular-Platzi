import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../../../core/services/products.service';
import { IProduct } from '../../../core/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<IProduct>;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params:Params) => {
        return this.productsService.getProduct(params.id)
      })
    )
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe((product: IProduct) => {
      console.log(product);
      
    });
  }

  createProduct() {

    const newProduct: IProduct = {
      id: '100',
      title: 'TWISTER-EDGE-X',
      image: 'assets/image/TWISTER-EDGE-X-RB.webp',
      price: 329.99,
      description: 'LoremIpsum'
    }

    this.productsService.createProduct(newProduct)
    .subscribe((product: IProduct) => {
      console.log(product);
    });
  }

  updateProduct() {

    const newProduct: Partial<IProduct> = {
      title: 'TWISTER-EDGE-X',
      image: 'assets/image/TWISTER-EDGE-X-RB.webp',
      price: 329.99,
      description: 'LoremIpsum'
    }

    this.productsService.updateProduct('1', newProduct)
    .subscribe((product: IProduct) => {
      console.log(product);
    });

  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe((product: IProduct) => {
      console.log(product);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
        .subscribe( 
          users => { // Good
          console.log(users);
        },
        error => { // Error
          console.error(error);
        }
        )
  }

  getFile(){
    this.productsService.getFile()
    .subscribe(file => {
      console.log(file);
      
    })
  }

  

}
