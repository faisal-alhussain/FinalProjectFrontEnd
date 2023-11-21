import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  item: any[] = [];
  itemName: string = "";
  itemProduct: string = "";
  itemPrice: number = 0;
  itemQuantity: number = 0;
  itemService: any;


  constructor(private cartservice: CartService) { }

  getItem(): void {
    this.cartservice.getItem().subscribe({
      next: (data) => {
        console.log(data);
        this.item = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  postItem(): void {
    const body = {
      product:this.itemProduct,
      name: this.itemName,
      price: this.itemPrice,
      quantity: this.itemQuantity,
      customer: {
        id: 2,
        customer: 'Faisal'
      },
    };
    this.cartservice.postItem(body).subscribe({
      next: (data) => {
        alert("Item posted successfully");
        this.getItem();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
  putItem(): void {
    const body = {
      product:this.itemProduct,
      name: this.itemName,
      price: this.itemPrice,
      quantity: this.itemQuantity,
      customer: {
        id: 2,
        customer: 'Faisal'
      },
    };
    this.cartservice.putItem(this.itemProduct, body).subscribe({
      next: (data) => {
        alert("Item modifiy successfully");
        this.getItem();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

  deleteItem(): void {
    this.cartservice.deleteItem(this.itemProduct).subscribe({
      next: (data) => {
        alert("Item deleted successfully");
        this.getItem();
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }
  }




