import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: string;
  eidtMode: boolean = false;
  productForm: FormGroup;
  productImages: FormArray = new FormArray([]);

  get imagesFormArrayControl(){
    return (this.productForm.get('images') as FormArray).controls;
  }
  constructor(private activatedroute: ActivatedRoute, private productService: ProductService, private router: Router) { }


  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.eidtMode = params['id'] != null;
        this.intializeForm();
      }
    );
  }
  onRemoveIngredient(index:number){
    this.productImages.removeAt(index);

  }
  onAddIngredient() {
    this.productImages.push(
      new FormGroup(
        {
          'imageUrl': new FormControl(null, Validators.required)
          // 'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }
      )
    )
  }

  private intializeForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';



    if (this.eidtMode) {

    //   let product = this.productService.getSingleProduct(this.id);
    //   recipeName = recipe.name;
    //   recipeImagePath = recipe.imagePath;
    //   recipeDescription = recipe.description;
    //   if (recipe['ingredients']) {
    //     for (let ingr of recipe.ingredients) {
    //       this.recipeIngredients.push(
    //         new FormGroup({
    //           'name': new FormControl(ingr.name, Validators.required),
    //           'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    //         })
    //       )
    //     }
    //   }
    }
    this.productForm = new FormGroup({
      'title': new FormControl(recipeName, Validators.required),
      'images': this.productImages
    });

  }



  onSubmit() {
    console.log(this.productForm.value);
  }


}
