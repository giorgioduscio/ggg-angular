import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { ShopsService } from '../../service/shops.service';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    NgFor,
    NgIf,
    FormsModule,
    ProductComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

}
