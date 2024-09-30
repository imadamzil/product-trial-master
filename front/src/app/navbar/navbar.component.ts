import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  totalItems = 0;
cartItemCount: any = 0;
openCart() {
  console.log('Ouvrir le panier');}

}
