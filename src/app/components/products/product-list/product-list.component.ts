import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  constructor(private productService: ProductService, private router:Router, private route:ActivatedRoute,private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {

    this.spinner.show();
      this.productService.getAllProducts(10).subscribe(response=>{
        this.products = response.data;
        this.spinner.hide();
      },(err)=>{
        this.spinner.hide();
      });
  }
  onAddNewProduct(){

  }
  onEditProduct(id:string){
    this.router.navigate([id,'edit'],{relativeTo:this.route});


  }
  onDeleteProduct(){

  }
}
