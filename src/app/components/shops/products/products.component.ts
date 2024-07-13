import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{
  id :number =1
  brand :any
  products :any[] =[]

  constructor(private productsService:ProductsService, private route: ActivatedRoute) {
    // VALORE URL
    this.route.params.subscribe(params => {
      this.id =Number(params['id'])
      // console.log('router:id', this.id);
    });
    productsService.getProducts().subscribe(r=>{
      // NOME BRAND
      r.products.map((product:any)=>{ 
        if(product.id==this.id) this.brand ={id:this.id, title:product.brand, description:product.description, imageUrl:product.images[0]}
        if(product.id==this.id ||product.id%this.id==1) this.products.push(product)
      })
      // console.log("products", this.brand);
    })
  }
}
