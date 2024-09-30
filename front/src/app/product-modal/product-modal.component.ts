import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  productForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product; isEdit: boolean },
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      internalReference: ['', Validators.required],
      shellId: [0, Validators.required],
      inventoryStatus: ['INSTOCK', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
    });

    if (data) {
      this.productForm.patchValue(data.product);
      this.isEditMode = data.isEdit;
    }
  }

  ngOnInit(): void { }

  save(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      if (this.isEditMode) {
        this.productService.updateProduct(product).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else {
        this.productService.addProduct(product).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
