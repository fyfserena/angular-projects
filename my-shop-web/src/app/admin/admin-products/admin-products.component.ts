import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: Product[];
  subscription: Subscription;
  filteredProducts: any[];

  constructor(private productService: ProductService) { 
    this.subscription= this.productService.getAll()
    .subscribe(products => this.filteredProducts = this.products = products);
  }

  filter(query: string){
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }


}
