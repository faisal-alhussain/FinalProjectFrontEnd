import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-review-cart',
  templateUrl: './review-cart.component.html',
  styleUrls: ['./review-cart.component.css']
})
export class ReviewCartComponent {
  item: any[] = [];
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.getItem();
  }

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
  }}

