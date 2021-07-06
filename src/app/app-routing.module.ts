import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'',component:MainContentComponent},
  {path:'products',component:ProductsComponent,children:[
    {path:'',component:ProductListComponent},
    {path:'new', component:ProductEditComponent},
    {path:':id/edit', component:ProductEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
