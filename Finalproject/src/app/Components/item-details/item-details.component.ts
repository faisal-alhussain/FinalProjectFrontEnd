import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: any; 

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

ngOnInit(): void {
  const itemId = this.route.snapshot.paramMap.get('id');

  if (itemId) {
    this.cartService.getItemById(itemId).subscribe(
      (data) => {
        this.item = data;
      },
      (error) => {
        console.error('Error fetching item:', error);
      }
    );
  }
}}
