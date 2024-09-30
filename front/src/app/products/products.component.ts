import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = false;
  totalProducts: number = 0;
  totalPages: number = 0;
  itemsPerPage: number = 12;
  CurrentPage: number = 1;

  constructor(private productService: ProductService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchProducts();
    this.getTotalProducts();
  }

  fetchProducts(): void {
    this.loading = true;
    this.productService.getProducts(this.CurrentPage, this.itemsPerPage).subscribe((data: Product[]) => {

      console.log(data);
      this.products = data;
      this.loading = false;
    });
  }

  getTotalProducts(): void {
    this.productService.getTotalProducts().subscribe(response => {
      console.log(response);
      this.totalProducts = response.total;
      this.totalPages = Math.ceil(this.totalProducts / this.itemsPerPage);

    });
  }

  openModal(product?: Product): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: { product: product || null, isEdit: !!product },
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fetchProducts();
        if (result.isEdit) {
          this.snackBar.open('Le produit a été modifié avec succès.', 'Fermer', {
            duration: 3000,
          });
        } else {
          this.snackBar.open('Le produit a été ajouté avec succès.', 'Fermer', {
            duration: 3000,
          });
        }
        this.getTotalProducts();
      }
    });
  }

  changePage(page: number): void {
    this.CurrentPage = page;
    this.fetchProducts();
  }

  updateItemsPerPage(): void {
    this.CurrentPage = 1;
    this.fetchProducts();
    this.getTotalProducts();
  }

  deleteProduct(productId: number | undefined): void {
    if (productId !== undefined) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.products = this.products.filter(product => product.id !== productId);
          this.openSnackBar('Le produit a été supprimé avec succès.', 'Fermer');
          this.getTotalProducts();
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du produit', err);
          this.openSnackBar('Erreur lors de la suppression du produit.', 'Fermer');
        }
      });
    } else {
      console.error('ID du produit est indéfini');
      this.openSnackBar('Erreur : ID du produit est indéfini.', 'Fermer');
    }
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
