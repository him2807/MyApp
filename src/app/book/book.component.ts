import { Component,EventEmitter, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from './types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
//OnDestroy 

  @Input() book: Book = {} as Book;
 // @Output() bookemitter = new EventEmitter<Book>();


  constructor(private cartService: CartService) {}

//myInterval: any = null;
  

ngOnInit(): void {
  //this.myInterval= setInterval(() => {
    //console.log('Hello');
    //},1000)
  }


  //ngOnDestroy(){
    //clearInterval(this.myInterval);
//console.log({onDestroy: 'onDestroy'});

  //}

  addToCart(){
    this.isInCart= true;
    this.cartService.add(this.book);
    //this.bookemitter.emit(this.book);
  }
  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  isInCart: boolean= false;
 
}
