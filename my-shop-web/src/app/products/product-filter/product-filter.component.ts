import { CategoryService } from './../../category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categories$
  @Input('category') category;

  constructor(private categorySerive: CategoryService
    ) { 
      this.categories$ = categorySerive.getAll();
    }

}
