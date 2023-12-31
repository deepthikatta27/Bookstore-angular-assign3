import { Component,EventEmitter,Input,Output } from '@angular/core';

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

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input() book: Book|undefined;
  @Output() addBook: EventEmitter<any>=new EventEmitter();

  addToCart(b:Book){
    this.addBook.emit(b);
  }
}
