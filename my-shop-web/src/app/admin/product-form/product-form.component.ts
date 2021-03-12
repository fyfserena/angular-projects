import { CategoryService } from './../../category.service';
import { ProductService } from './../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product = {};
  id;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private categoryService: CategoryService, 
    private productSerive: ProductService) {
    
    this.categories$ = categoryService.getAll();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productSerive.get(this.id).take(1).subscribe(p => this.product = p);

   }

  save(product) {
    if (this.id) this.productSerive.update(this.id, product);
    else this.productSerive.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    this.productSerive.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

}
