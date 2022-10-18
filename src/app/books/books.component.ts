import { Component, OnInit, Output } from '@angular/core';
import { Book } from '../book/types/Book';

import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 

  
  constructor(private bookService: BooksService) {
   
    //this.bookService= new BooksService();
   }
  //console.log({constructor: 'constructor'});
  books: Book[] = [];
 
  ngOnInit(): void {
    this.books=this.bookService.getBooks()
  }
   // console.log({onInIt: 'On In It'});

//@Output() card: Book[] = [];


//isDisabled: boolean= false;
isShowing: boolean = true;

    toggleBooks(){
    this.isShowing = !this.isShowing; //if isShowing is true then make it false and if isShowing is false then make it true 
  }

  //addToCart(book : Book){
    //console.log(book);
    
  //}
  //handleCick(){
    //this.isDisabled = true;
   // alert('I am working');
  //}

// myName: string = '';
  }
