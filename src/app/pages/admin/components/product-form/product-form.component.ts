import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';
import { IProduct } from '../../../../product.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
  ) {
    this.buildForm();
  }

  private buildForm ()  {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: ['assets/images/stickers2.png'],
      description: ['', [Validators.required]],
    })
  }

  saveProduct() {
    console.log(this.form.value);
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
          .subscribe( (newProduct: IProduct) => {
            console.log(newProduct);
            this.router.navigate(['./admin/catalog'])
          })
    }
  }
  
}
