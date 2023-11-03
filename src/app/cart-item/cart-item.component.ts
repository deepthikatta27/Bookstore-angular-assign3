import { Component,Input,Output,EventEmitter } from '@angular/core';

interface Book{
  "ISBN": number,
  "title": string,
  "author": string,
  "summary": string,
  "image": string,
  "price": {
    "currency": string,
    "value": number,
    "displayValue": string
  }
}

interface CartItem{
  bookInfo: Book;
  quantity: number;
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() item: CartItem|undefined;
  @Output() removeFromCart: EventEmitter<number>=new EventEmitter();
  @Output() quantityIncrease: EventEmitter<number>=new EventEmitter();
  @Output() quantityDecrease: EventEmitter<number>=new EventEmitter();

  removeBook(id:number){
    this.removeFromCart.emit(id);
  }
  increaseQuantity(id:number){
    this.quantityIncrease.emit(id);
  }
  decreaseQuantity(id:number){
    this.quantityDecrease.emit(id);
  }

}
