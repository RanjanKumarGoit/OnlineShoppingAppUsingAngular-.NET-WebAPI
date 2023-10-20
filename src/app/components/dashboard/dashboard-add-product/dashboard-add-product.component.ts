import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service'; // Assuming you have a ProductService
import { Product, Image } from 'src/app/model/product'; // Import the Product and Image interfaces

@Component({
  selector: 'app-dashboard-add-product',
  templateUrl: './dashboard-add-product.component.html',
  styleUrls: ['./dashboard-add-product.component.css']
})
export class DashboardAddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.required]],
      discountPercentage: ['', Validators.required],
      rating: [0, [Validators.required]],
      stock: ['', [Validators.required, Validators.required]],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      thumbnail: ['', Validators.required],
      images: this.fb.array([]) // You might need to handle images as an array of FormGroup if there are multiple images.
    });
  }

  // You may add methods to handle adding and removing images from the form array.

  onSubmit() {
    if (this.productForm.valid) {
      const productData: any = {
        title: this.productForm.value.title,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        discountPercentage: this.productForm.value.discountPercentage,
        rating: this.productForm.value.rating.toString(), // Convert the number to a string
        stock: this.productForm.value.stock.toString(),
        brand: this.productForm.value.brand,
        category: this.productForm.value.category,
        thumbnail: this.productForm.value.thumbnail,
        images: [
          {
            url: "adfhja"
          }
        ]
      };

      this.productService.createProduct(productData).subscribe(
        (data) => {
          console.log('Product added successfully:', data);
          // Reset the form after successful submission if needed
          this.productForm.reset();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
